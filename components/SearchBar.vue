<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useCocktails } from '~/services/cocktails'

const isDisabled = ref<boolean>(false)
const emit = defineEmits(['searchByName', 'searchByCategory'])

const { listCategories } = useCocktails()
const { data: categoriesList, pending } = await listCategories()

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(searchByNameSchema),
  validateOnMount: false,
})

const searchDrinksByName = handleSubmit((values) => {
  emit('searchByName', values.drinkName)
})

const searchDrinksByCategories = (category: string | null) => {
  if (category) {
    isDisabled.value = true
    emit('searchByCategory', category)
  } else isDisabled.value = false
}

// Transforma array complexo em array de strings
const flattenCategories = computed(
  () => categoriesList.value?.drinks.map((drink) => drink.strCategory) || [],
)

defineProps<{ isLoading: boolean }>()
</script>
<template>
  <div
    class="flex flex-col-reverse lg:flex-row gap-5 justify-between w-full lg:items-center"
  >
    <BaseSelect
      :options="flattenCategories"
      :is-loading="pending"
      empty-message="Nenhuma categoria foi encontrada"
      title="Pesquisa por Categoria"
      @option-selected="searchDrinksByCategories"
    />
    <div class="relative w-full lg:w-1/5 flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400">OU</span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>
    <form
      class="flex gap-4 items-center w-full lg:w-1/2"
      @submit.prevent="searchDrinksByName"
    >
      <BaseInput
        :disabled="isDisabled || isLoading || pending"
        name="drinkName"
        type="text"
        placeholder="Pesquise drinks pelo nome..."
      >
        <template #icon>
          <Icon
            name="mdi:search"
            :color="!!errors.drinkName ? 'red' : 'black'"
          />
        </template>
      </BaseInput>
      <button
        class="btn"
        type="submit"
        :disabled="isDisabled || isLoading || pending"
      >
        <Icon
          v-if="isLoading || pending"
          name="mdi:loading"
          color="white"
          class="animate-spin"
        />
        <span v-else>Pesquisar</span>
      </button>
    </form>
  </div>
</template>
