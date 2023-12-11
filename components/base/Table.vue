<script setup lang="ts">
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

defineEmits(['openDetails'])
</script>
<template>
  <div class="relative sm:rounded-lg border overflow-y-auto max-h-[600px]">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 table-auto"
    >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
        <tr>
          <th v-for="(label, index) in labels" :key="index" class="px-6 py-3">
            {{ label.text }}
          </th>
        </tr>
      </thead>
      <tbody v-if="data && data.length > 0">
        <tr
          v-for="(item, itemIndex) in data"
          :key="itemIndex"
          class="bg-white border-b"
        >
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
