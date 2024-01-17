import { defineStore } from 'pinia'

export const useStore = defineStore('glStore', {
  // arrow function recommended for full type inference
  state: () => ({
    isnavDrop: "",
    menuColor:"",
    model:"",
    indenFor:"",
    allProduts:[],
    productFilter:[]
  }),
  actions:{
    flipNavDrop(data) {
        this.isnavDrop = data
      },
      setMenuColor(data) {
        this.menuColor = data
      },
      setFilter(data){
        this.productFilter = data
      },
      setModel(data){
        this.model = data
      },
      setindenFor(data){
        this.indenFor = data
      },
      setProducts(data){
        this.allProduts = data
      }
  }
})