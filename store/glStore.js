import { defineStore } from 'pinia'

export const useStore = defineStore('glStore', {
  // arrow function recommended for full type inference
  state: () => ({
    isnavDrop: "",
    menuColor:""
  }),
  actions:{
    flipNavDrop(data) {
        this.isnavDrop = data
      },
      setMenuColor(data) {
        this.menuColor = data
      },
  }
})