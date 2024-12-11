<script setup lang="ts">
import type { LoginRequest } from '@/app/@types/account.interface';
import { useAccountStore } from '@/stores/account.store';
import { useToast } from 'primevue';
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

import NikkInputText from '@/components/forms/NikkInputText.vue';
import NikkInputPassword from '@/components/forms/NikkInputPassword.vue';
import { getApiErrors } from '@/app/utils/helpers';
import type { AxiosError } from 'axios';


const accountStore = useAccountStore()
const loading = ref(false)
const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const toast = useToast()

const state: LoginRequest = reactive({
  email: '',
  password: ''
})

async function submit(): Promise<void> {
  loading.value = true
  try {
    //FIXME: Implement form validation
    const isFormCorrect = true
    if (isFormCorrect) {
      await accountStore.login(state)
      if (route.query.redirect) {
        router.push(`${route.query.redirect}`)
      } else {
        if (accountStore.user && accountStore.user.isAdmin()) {
          router.push({ name: 'admin.dashboard' })
        } else {
          router.push({ name: 'dashboard' })
        }
      }
    } else {
      toast.add({
        severity: "error",
        summary: t('labels.invalidForm'),
        detail: t('labels.invalidFormHint'),
        life: 10000,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e?.response?.status == 422) {
      toast.add({
        severity: "error",
        summary: t('labels.loginFailed'),
        detail: t('messages.credentialsNotFound'),
        life: 10000,
      });
    } else {
      toast.add({
        severity: "error",
        summary: t('labels.loginFailed'),
        detail: getApiErrors(e as AxiosError),
        life: 10000,
      });
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="w-full p-3 md:py-3 md:p-0 overflow-y-auto">
    <div class="border w-full md:w-4/12 2xl:w-3/12 p-2 md:p-8 rounded-lg mx-auto">
      <form @submit.prevent="submit" class="py-3 flex flex-col gap-5">
        <NikkInputText v-model="state.email" errorHelpLabel="errors.validation.email" id="email" :isError="false"
          label="labels.email" type="email" />

        <NikkInputPassword v-model="state.password" errorHelpLabel="errors.validation.passwords.minCount" id="password"
          :isError="false" label="labels.password" :toggleMask="true" :feedback="false" />

        <PrimeButton type="submit" :loading="loading" :label="$t('labels.login')" />
      </form>
    </div>
  </div>
</template>