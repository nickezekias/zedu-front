<script setup lang="ts">
import { ref } from 'vue';

import { getApiErrors } from '@/app/utils/helpers';
import { useAccountStore } from '@/stores/account.store';
import { useI18n } from 'vue-i18n';
import { useToast } from 'primevue';
import { useRouter } from 'vue-router';

import type { AxiosError } from 'axios';

import StepPanel from 'primevue/steppanel';
import NikkInputText from '@/components/forms/NikkInputText.vue';
import School from '@/app/models/school.model';

const accountStore = useAccountStore();
const router = useRouter();
const { t } = useI18n()
const toast = useToast()

const loading = ref(false)
const school = ref(School.initEmpty())

async function submit() {
  loading.value = true

  try {
    //FIXME: Validate form values
    const isFormCorrect = true
    if (isFormCorrect) {
      const registerPayload = accountStore.registerPayload
      registerPayload.school = school.value
      accountStore.setRegisterPayload(registerPayload)

      await accountStore.register(accountStore.registerPayload)

      toast.add({
        severity: "success",
        summary: t('labels.operationSuccess'),
        detail: t('features.account.registerSuccessMessage'),
        life: 5000
      })

      router.push({ name: 'dashboard' })
    } else {
      toast.add({
        severity: "error",
        summary: t('labels.operationFailure'),
        detail: t('errors.validation.invalidForm'),
        life: 10000,
      });
    }
  } catch (e) {
    toast.add({
      severity: "error",
      summary: t('labels.operationFailure'),
      detail: getApiErrors(e as AxiosError),
      life: 10000,
    });
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <StepPanel v-slot="{ activateCallback }">
    <form class="py-3 flex flex-col gap-5">
      <NikkInputText v-model="school.name" errorHelpLabel="errors.validation.requiredField" id="school-name"
        :isError="false" label="labels.name" type="text" />

      <NikkInputText v-model="school.abbreviation" errorHelpLabel="errors.validation.requiredField"
        id="school-abbreviation" :isError="false" label="labels.abbreviation" type="text" />

      <NikkInputText v-model="school.address" errorHelpLabel="errors.validation.requiredField" id="school-address"
        :isError="false" label="labels.address" type="text" />

      <NikkInputText v-model="school.email" errorHelpLabel="errors.validation.email" id="school-email" :isError="false"
        label="labels.email" type="email" />

      <NikkInputText v-model="school.phone" errorHelpLabel="errors.validation.requiredField" id="school-phone"
        :isError="false" label="labels.phone" type="tel" />

      <div class="py-6">
        <PrimeButton text plain class="mr-3" :label="$t('labels.previous')" @click="activateCallback('1')" />
        <PrimeButton :label="$t('labels.register')" :loading="loading" @click="submit" />
      </div>
    </form>
  </StepPanel>
</template>