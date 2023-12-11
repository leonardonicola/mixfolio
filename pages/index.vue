<script setup lang="ts">
import { useCocktails } from '~/services/cocktails'
import type { DrinkDetails } from '~/@types/cocktails'
import type { LabelProtocol } from '~/components/base/Table.vue'

const { searchByCategory, searchByName, cocktailFullDetails } = useCocktails()
const modal = useModal()

const drinkOnModal = ref<DrinkDetails | null>(null)
const drinksList = ref<Partial<DrinkDetails>[] | null>([])
const tableLabels: LabelProtocol[] = [
  {
    text: 'Bebida',
    field: 'strDrink',
  },
  {
    text: 'Categoria',
    field: 'strCategory',
  },
]

const fetchByName = async (name: string) => {
  try {
    const res = await searchByName(name)
    drinksList.value = res.drinks
  } catch (error) {}
}

const fetchByCategory = async (category: string) => {
  try {
    const res = await searchByCategory(category)
    drinksList.value = res.drinks.map((drink) => {
      return {
        ...drink,
        strCategory: category,
      }
    })
  } catch (error) {}
}

const fetchCocktailDetails = async (cocktailId: number | string) => {
  try {
    const res = await cocktailFullDetails(cocktailId)
    drinkOnModal.value = res.drinks[0]
  } catch (error) {}
}

const openDrinkDetails = async (drink: DrinkDetails) => {
  await fetchCocktailDetails(drink.idDrink)
  modal.openModal(drink.strDrink)
}
</script>

<template>
  <main class="flex flex-col py-5 px-8 md:px-16 gap-5">
    <SearchBar
      @search-by-category="fetchByCategory"
      @search-by-name="fetchByName"
    />

    <BaseTable
      :labels="tableLabels"
      :data="drinksList"
      @open-details="openDrinkDetails"
    >
      <template #empty>
        <div
          class="flex flex-col gap-2 items-center justify-center py-20 text-neutral-500 text-center px-10"
        >
          <Icon name="mdi:search" size="5em" />
          <h1 class="text-3xl font-bold">Nenhum resultado!</h1>
        </div>
      </template>
    </BaseTable>
    <BaseModal>
      <template #body>
        <section v-if="drinkOnModal" class="w-5/6 py-4">
          <figure class="rounded-xl overflow-hidden shadow-md">
            <NuxtImg
              :src="drinkOnModal.strDrinkThumb"
              class="w-full"
              placeholder
            />
          </figure>

          <figcaption class="flex flex-col gap-2 mt-8">
            <p class="font-semibold">Instructions:</p>
            {{ drinkOnModal.strInstructions }}
          </figcaption>
        </section>
      </template>
    </BaseModal>
  </main>
</template>
