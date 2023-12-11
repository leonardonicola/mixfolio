interface DrinkCategory {
  strCategory: string
}

interface DrinkDetails {
  idDrink: string
  strDrink: string
  strVideo: string
  strCategory: string
  strAlcoholic: string
  strInstructions: string
  strDrinkThumb: string
}

interface GetCocktailsByCategory {
  drinks: Pick<DrinkDetails, 'idDrink' | 'strDrink' | 'strDrinkThumb'>[]
}

interface GetCocktailsByName {
  drinks: DrinkDetails[]
}

interface GetCocktailsCategories {
  drinks: DrinkCategory[]
}

export type {
  GetCocktailsCategories,
  GetCocktailsByName,
  DrinkDetails,
  GetCocktailsByCategory,
}
