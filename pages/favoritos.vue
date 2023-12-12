<script setup lang="ts">
import type { DrinkDetails } from '~/@types/cocktails'
import { useCocktails } from '~/services/cocktails'

const { cocktailFullDetails } = useCocktails()
const favoriteDrinks = ref<DrinkDetails[]>([])
const drinkOnModal = ref<DrinkDetails | null>(null)
const isLoading = ref<boolean>(true)

const modal = useModal()

const fetchCocktailDetails = async (cocktailId: number | string) => {
  isLoading.value = true
  try {
    const res = await cocktailFullDetails(cocktailId)
    drinkOnModal.value = res.drinks[0]
  } catch (error) {
    createError({ message: (error as Error).message })
  } finally {
    isLoading.value = false
  }
}

const openDrinkDetails = async (drink: DrinkDetails) => {
  await fetchCocktailDetails(drink.idDrink)
  modal.openModal(drink.strDrink)
}

const desfavoriteDrink = (drink: DrinkDetails) => {
  favoriteDrinks.value = favoriteDrinks.value.filter(
    (drinkArr) => drinkArr.idDrink !== drink.idDrink,
  )
  localStorage.setItem('favoriteDrinks', JSON.stringify(favoriteDrinks.value))
}

onMounted(() => {
  const getFavorites = JSON.parse(
    localStorage.getItem('favoriteDrinks') || '[]',
  )
  favoriteDrinks.value = getFavorites as DrinkDetails[]
  isLoading.value = false
})
</script>
<template>
  <main class="py-5 px-8 md:px-16">
    <Transition appear name="fade" mode="out-in">
      <Skeleton v-if="isLoading && favoriteDrinks.length === 0" />
      <h1
        v-else-if="favoriteDrinks.length === 0"
        class="text-3xl mt-10 font-bold"
      >
        Você não tem favoritos!
        <RouterLink
          to="/"
          class="border-b-4 border-dark-primary hover:text-primary transition-colors cursor-pointer"
        >
          Procure</RouterLink
        >
        drinks e favorite!
      </h1>
      <section
        v-else
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-14"
      >
        <TransitionGroup name="fade">
          <DrinkCard
            v-for="drink in favoriteDrinks"
            :key="drink.idDrink"
            :title="drink.strDrink"
            :img-url="drink.strDrinkThumb"
            :description="drink.strCategory"
            :is-loading="isLoading"
            @open-modal="openDrinkDetails(drink)"
            @desfavorite="desfavoriteDrink(drink)"
          />
        </TransitionGroup>
      </section>
    </Transition>
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
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease all;
}
</style>
