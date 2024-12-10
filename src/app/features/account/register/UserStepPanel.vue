<script setup lang="ts">
import { ref } from 'vue';
import Person from '@/app/models/person.model';
import StepPanel from 'primevue/steppanel';

import NikkInputText from '@/components/forms/NikkInputText.vue';
import NikkInputPassword from '@/components/forms/NikkInputPassword.vue';
import { RadioButton } from 'primevue';
import User from '@/app/models/user.model';
import { useAccountStore } from '@/stores/account.store';

const accountStore = useAccountStore();
const state = ref({
  person: ref(Person.initEmpty()),
  user: ref(User.initEmpty()),
  password_confirmation: ''
})

function submit() {
  //FIXME: Validate form values
  const registerPayload = accountStore.registerPayload
  registerPayload.person = state.value.person
  registerPayload.email = state.value.user.email
  registerPayload.password = `${state.value.user.password}`
  registerPayload.password_confirmation = state.value.password_confirmation
  accountStore.setRegisterPayload(registerPayload)
}
</script>

<template>
  <StepPanel v-slot="{ activateCallback }">
    <form class="py-3 flex flex-col gap-5">
      <NikkInputText v-model="state.person.firstName" errorHelpLabel="errors.validation.requiredField" id="first-name"
        :isError="false" label="labels.firstName" type="text" />

      <NikkInputText v-model="state.person.lastName" errorHelpLabel="errors.validation.requiredField" id="last-name"
        :isError="false" label="labels.lastName" type="text" />

      <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.person.gender" inputId="gender-male" :value="Person.genders['MALE']" />
          <label for="gender-male">{{ $t('labels.male') }}</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="state.person.gender" inputId="gender-female" :value="Person.genders['FEMALE']" />
          <label for="gender-female">{{ $t('labels.female') }}</label>
        </div>
      </div>

      <NikkInputText v-model="state.user.email" errorHelpLabel="errors.validation.email" id="email" :isError="false"
        label="labels.email" type="email" />

      <NikkInputText v-model="state.person.phone" errorHelpLabel="errors.validation.requiredField" id="phone"
        :isError="false" label="labels.phone" type="tel" />

      <NikkInputPassword v-model="state.user.password" errorHelpLabel="errors.validation.passwords.minCount"
        id="password" :isError="false" label="labels.password" :toggleMask="false" />

      <NikkInputPassword v-model="state.password_confirmation" errorHelpLabel="errors.validation.passwords.minCount"
        id="password-confirmation" :isError="false" label="labels.passwordConfirm" :toggleMask="false" />

      <div class="py-6">
        <PrimeButton :label="$t('labels.next')" @click="() => { submit(); activateCallback('2') }" />
      </div>
    </form>
  </StepPanel>
</template>
