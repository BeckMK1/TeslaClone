import { defineStore } from 'pinia'

export const useStore = defineStore('glStore', {
  // arrow function recommended for full type inference
  state: () => ({
    isnavDrop: "",
    currentsectionActive: "",
  }),
  actions:{
    flipNavDrop(data) {
        this.isnavDrop = data
      },
  }
})