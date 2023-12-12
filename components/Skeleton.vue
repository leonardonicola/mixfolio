<template>
  <section class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="index in 6"
      :key="index"
      class="h-96 w-full animate-pulse bg-neutral-400 rounded-xl"
    ></div>
  </section>
</template>
