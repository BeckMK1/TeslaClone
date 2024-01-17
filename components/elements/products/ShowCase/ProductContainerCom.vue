<template>
	<div class="productContainer">
		<TransitionGroup name="list">
			<ElementsProductsShowCaseProductCom v-for="product in products" :key="product"  :title="product.title" :sub-title="product.subTitle" :title-info="product.titleInfo" 
			:main-price="product.price" :sub-price="product.normalPrice" :isDemo="product.isDemo" :images="product.images" :main-specs1="product.mainSpec1"
			:main-specs2="product.mainSpec2" :main-specs3="product.mainSpec3"  
			:sub-specs="product.subSpecs"></ElementsProductsShowCaseProductCom>
		</TransitionGroup>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const products = ref([])
const checFilter = computed(()=> store.productFilter)
const filtedProducts = ref([])
function getProductData(){
	for(let product of store.allProduts){
		products.value.push(product.porduct)
	}
}
getProductData()
// function filterModel(){
// filtedProducts.value = products.value.filter((product) =>  store.productFilter.every(v => product.filterValues.includes(v)))
// }
// filterModel()
// watch(checFilter, async(newData, oldData)=>{
// 	if(newData != oldData ){
// 		filterModel()
// 	}
// })

</script>
<style lang="scss" scoped>
.productContainer{
	display: grid;
    grid-template-columns: 1fr;
	gap: 1.5rem;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  position: relative;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  position: absolute;
  max-width:100%;
}
@media(min-width:1020px){
	.productContainer{
		grid-template-columns: 1fr 1fr;
	}
	.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  position: relative;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  position: absolute;
  max-width:40%;
}
}
@media(min-width:1800px){
	.productContainer{
		grid-template-columns: 1fr 1fr 1fr;
	}
	.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  position: relative;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  position: absolute;
  max-width:20%;
}
}

</style>