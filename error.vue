<script setup lang="ts">
interface Error {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}
defineProps<{
  error: Error
}>()

const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <main class="w-screen h-screen flex items-center">
    <div class="flex flex-col items-center w-full gap-10">
      <h1 class="text-9xl text-neutral-400 font-black">
        {{ error.statusCode }}
      </h1>

      <div class="flex flex-col items-center gap-4">
        <p>Whoops...</p>
        <p>Algum erro aconteceu!</p>
      </div>

      <button class="btn" @click="handleError">
        <Icon name="mdi:arrow-left-thick" color="white" />Voltar para Home
      </button>
    </div>
  </main>
</template>
