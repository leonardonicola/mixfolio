import { useCustomFetch } from '.'
import type {
  GetCocktailsCategories,
  GetCocktailsByName,
  GetCocktailsByCategory,
} from '~/@types/cocktails'

export function useCocktails() {
  const config = useRuntimeConfig()

  return {
    async searchByName(name: string) {
      return await $fetch<GetCocktailsByName>(
        `${config.public.apiBaseUrl}/search.php`,
        {
          method: 'GET',
          query: {
            s: name,
          },
        },
      )
    },
    async listCategories() {
      return await useCustomFetch<GetCocktailsCategories>('/list.php', {
        method: 'GET',
        query: {
          c: 'list',
        },
        lazy: true,
      })
    },
    async searchByCategory(category: string) {
      return await $fetch<GetCocktailsByCategory>(
        `${config.public.apiBaseUrl}/filter.php`,
        {
          method: 'GET',
          query: {
            c: category,
          },
        },
      )
    },
    async cocktailFullDetails(cocktailId: number | string) {
      return await $fetch<GetCocktailsByName>(
        `${config.public.apiBaseUrl}/lookup.php`,
        {
          method: 'GET',
          query: {
            i: cocktailId,
          },
        },
      )
    },
  }
}
