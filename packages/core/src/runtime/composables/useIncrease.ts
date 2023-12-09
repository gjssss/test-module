import { ref } from 'vue'

export function useIncrease(def: number) {
  const data = ref<number>(def)
  return {
    data,
    handle: () => {
      data.value++
    },
    reset: () => {
      data.value = def
    },
  }
}
