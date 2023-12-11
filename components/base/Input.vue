<script setup lang="ts">
import { useField } from 'vee-validate'

const props = withDefaults(
  defineProps<{
    name: string
    type?: 'number' | 'text' | 'email' | 'password'
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    type: 'text',
    placeholder: '',
    disabled: false,
  },
)
const { value, errorMessage } = useField(() => props.name)
</script>
<template>
  <div class="relative w-full">
    <div
      class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
    >
      <slot name="icon" />
    </div>
    <input
      v-model="value"
      :disabled="disabled"
      :type="type"
      class="input ps-10"
      :class="{ 'p-error': errorMessage }"
      :placeholder="placeholder"
    />
    <small v-if="errorMessage" class="text-error text-sm mt-4 absolute top-8">{{
      errorMessage
    }}</small>
  </div>
</template>
