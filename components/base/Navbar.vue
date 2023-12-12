<script setup lang="ts"></script>

<template>
  <div class="w-screen px-8 md:px-16 h-24 flex items-center justify-between">
    <RouterLink
      to="/"
      class="font-bold text-3xl font-serif select-none hover:text-primary transition-colors"
      >Mixfolio</RouterLink
    >

    <div class="flex gap-5 items-center justify-between">
      <RouterLink
        to="/"
        exact-active-class="border-b-4 border-b-primary"
        class="hover:cursor-pointer hover:text-primary transition-colors"
        >Home</RouterLink
      >
      <RouterLink
        to="/favoritos"
        exact-active-class="border-b-4 border-b-primary"
        class="hover:cursor-pointer hover:text-primary transition-colors"
        >Favoritos</RouterLink
      >
    </div>
  </div>
</template>
