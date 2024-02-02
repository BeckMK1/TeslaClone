<template>
	<div class="productContainer">
		<TransitionGroup name="list" v-if="products.length != 0">
			<ElementsProductsShowCaseProductCom v-for="(product, index) in products" :key="index"  :title="product.title" :sub-title="product.subTitle" :title-info="product.titleInfo" 
			:main-price="product.price" :sub-price="product.normalPrice" :isDemo="product.isDemo" :images="product.images" :main-specs1="product.mainSpec1"
			:main-specs2="product.mainSpec2" :main-specs3="product.mainSpec3"  
			:sub-specs="product.subSpecs" :product-id="'product-' + index"></ElementsProductsShowCaseProductCom>
		</TransitionGroup>
		<div class="loader" v-if="products.length == 0 ">loading....</div>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const products = ref([])
const checkProducts = computed(() => store.allProduts)
const checFilter = computed(()=> store.productFilter)
const filtedProducts = ref([])
function getProductData(){

}
getProductData()
watch(checkProducts, async(newValue, oldValue) =>{
	if(newValue != oldValue && products.length != newValue.length) {
			products.value = store.allProduts.map(product => product.porduct)
	}
})
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
.loader{
	position: absolute;
	color: black;
	font-size: 2rem;
	left: 50%;
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