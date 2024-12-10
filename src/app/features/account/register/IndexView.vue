<script setup lang="ts">
import Stepper from 'primevue/stepper';
import Step from 'primevue/step';
import StepItem from 'primevue/stepitem';

import UserStepPanel from './UserStepPanel.vue'
import SchoolStepPanel from './SchoolStepPanel.vue';
</script>
<template>
  <div class="w-full p-3 md:py-3 md:p-0 overflow-y-auto">
    <div class="border w-full md:w-4/12 2xl:w-3/12 p-2 md:p-8 rounded-lg mx-auto">
      <Stepper value="1">
        <StepItem value="1">
          <Step>{{ $t('labels.register') }}</Step>
          <UserStepPanel class="dark:bg-transparent" />
        </StepItem>
        <!-- FIXME: ADD Choose License Step -->
        <!-- <StepItem value="2">
          <Step>{{ $t('labels.license') }}</Step>
        </StepItem> -->
        <StepItem value="2">
          <Step>{{ $t('labels.school') }}</Step>
          <SchoolStepPanel class="dark:bg-transparent" />
        </StepItem>
      </Stepper>
    </div>
  </div>
</template>
