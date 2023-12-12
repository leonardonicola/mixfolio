<script setup lang="ts">
import type { DrinkDetails } from '~/@types/cocktails'

export interface LabelProtocol {
  text: string
  field: string
}

export interface DataProtocol {
  [key: string | number]: string | number
}

defineProps<{
  labels: LabelProtocol[]
  data: DataProtocol[] | null
}>()

defineEmits(['openDetails', 'favoriteItem'])

const isFavorite = (item: Object) => {
  const storedFavorites = localStorage.getItem('favoriteDrinks')
  if (!storedFavorites) return false
  const existingArray: DrinkDetails[] = JSON.parse(storedFavorites)
  const itemExists = existingArray.some(
    (itemInArr) => itemInArr.idDrink === (item as DrinkDetails).idDrink,
  )
  return itemExists
}
</script>
<template>
  <div class="relative sm:rounded-lg border overflow-y-auto max-h-[600px]">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 table-auto"
    >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
        <tr>
          <th class="px-6 py-3 w-10">
            <Icon name="mdi:star" size="1.5em" />
          </th>
          <th
            v-for="(label, index) in labels"
            :key="index"
            :data-cy="index"
            class="px-6 py-3"
          >
            {{ label.text }}
          </th>
        </tr>
      </thead>
      <tbody v-if="data && data.length > 0">
        <tr
          v-for="(item, idx) in data"
          :key="item.idDrink as string"
          class="bg-white border-b"
        >
          <td class="px-6 py-4">
            <input
              :id="idx.toString()"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              :checked="isFavorite(item)"
              @click="$emit('favoriteItem', item)"
            />
          </td>
          <td
            v-for="(label, labelIndex) in labels"
            :key="labelIndex"
            class="px-6 py-4"
          >
            <span
              v-if="labelIndex === 0"
              class="w-fit font-medium text-gray-900 whitespace-nowrap cursor-pointer underline"
              @click="$emit('openDetails', item)"
              >{{ item[label.field] }}</span
            >
            <span v-else class="w-fit">
              {{ item[label.field] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <slot v-if="!data || data.length === 0" name="empty" />
  </div>
</template>
