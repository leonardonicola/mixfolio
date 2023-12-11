<script setup lang="ts">
const { title, closeModal, isOpen } = useModal()
</script>
<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="flex justify-center items-center fixed left-0 top-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black/50"
        @click.self="closeModal"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-2xl shadow">
            <!-- Modal header -->
            <div
              class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
            >
              <h3 class="text-xl font-semibold text-gray-900">
                {{ title }}
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                @click="closeModal"
              >
                <Icon name="mdi:close" />
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4 flex justify-center">
              <slot name="body" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
