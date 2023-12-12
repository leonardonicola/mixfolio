<script setup lang="ts">
defineProps<{
  imgUrl: string
  title: string
  description: string
  isLoading: boolean
}>()

defineEmits(['openModal', 'desfavorite'])
</script>
<template>
  <div
    class="flex flex-col w-full min-h-[300px] items-center text-center border-2 border-background rounded-2xl p-5"
  >
    <figure class="w-full h-3/5 rounded-xl overflow-hidden mb-6">
      <NuxtImg :src="imgUrl" fit="cover" placeholder class="w-full" />
    </figure>
    <figcaption class="flex flex-col justify-between gap-4 flex-1 w-full px-5">
      <h2 class="font-serif font-extrabold text-xl">{{ title }}</h2>
      <p class="truncate">{{ description }}</p>
      <div class="flex items-center justify-between">
        <button class="btn" :disabled="isLoading" @click="$emit('openModal')">
          Instruções
        </button>
        <button :disabled="isLoading" @click="$emit('desfavorite')">
          <Icon
            name="mdi:heart"
            :class="!isLoading ? 'text-primary' : 'text-gray-300'"
            class="cursor-pointer hover:text-dark-primary transition-colors"
            size="2em"
          />
        </button>
      </div>
    </figcaption>
  </div>
</template>
