<script setup lang="ts">
const selected = ref<string | null>(null)

defineProps<{
  options: string[]
  title: string
  emptyMessage: string
  isLoading: boolean
}>()

const emit = defineEmits(['optionSelected'])
watch(selected, (newVal) => emit('optionSelected', newVal))
</script>
<template>
  <select v-model="selected" class="select" data-cy="select">
    <option selected :value="null">{{ title }}</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>
<style scoped></style>
