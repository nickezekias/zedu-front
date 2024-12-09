<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const model: any = defineModel()
const props = defineProps<{
  id: string
  disabled?: boolean
  errorHelpLabel: string
  label: string
  readonly?: boolean
  type: string
  isError: boolean
}>()
</script>

<template>
  <FloatLabel variant="on">
    <InputText v-model="model" class="w-full p-3 border shadow-none" :disabled="props.disabled" :invalid="props.isError"
      :id="props.id" :readonly="props.readonly" :type="type" />
    <label :class="props.isError ? 'nikk-invalid' : ''" :for="props.id">{{ $t(`${props.label}`) }}</label>
    <small v-if="props.isError" :id="`${props.id}-help`" class="nikk-invalid">
      {{ $t(`${props.errorHelpLabel}`) }}
    </small>
  </FloatLabel>
</template>

<style scoped>
.p-inputtext:focus {
  border-color: var(--p-primary-color)
}

.p-inputtext.p-invalid {
  border-color: var(--p-red-500)
}
</style>