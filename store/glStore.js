import { defineStore } from 'pinia'

export const useStore = defineStore('glStore', {
  // arrow function recommended for full type inference
  state: () => ({
    checkModal: false,
    isnavDrop: "",
    menuColor:"",
    model:"",
    indenFor:"",
    allProduts:[],
    productFilter:[],
    allSlides:[],
    product:[],
    filterZipCode:"",
    searchArea:"50"
  }),
  actions:{
    flipModal(data){
      this.checkModal = data
    },
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
      },
      setProduct(data){
        this.product = data
      },
      setslides(data){
        this.allSlides = data
      },
      setfilterZip(data){
        this.filterZipCode = data
      },
      setSearchArea(data){
        this.searchArea = data
      }
  }
})