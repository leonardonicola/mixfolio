<script setup lang="ts"></script>

<template>
  <div class="w-screen px-8 md:px-16 h-24 flex items-center justify-between">
    <RouterLink to="/" custom
      ><h1 class="font-bold text-3xl font-serif cursor-pointer select-none">
        Mixfolio
      </h1></RouterLink
    >

    <div class="flex gap-5 items-center justify-between">
      <RouterLink
        to="/"
        exact-active-class="border-b-4 border-b-primary"
        class="hover:cursor-pointer hover:text-primary transition-colors"
        >Home</RouterLink
      >
      <RouterLink
        to="/sobre"
        exact-active-class="border-b-4 border-b-primary"
        class="hover:cursor-pointer hover:text-primary transition-colors"
        >Sobre</RouterLink
      >
    </div>
  </div>
</template>
