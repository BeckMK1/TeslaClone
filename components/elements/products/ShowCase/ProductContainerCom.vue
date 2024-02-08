<template>
	<div class="productContainer">
		<TransitionGroup name="list" v-if="products.length != 0 && checkFilter == ''">
			<ElementsProductsShowCaseProductCom v-for="(product, index) in checkProducts" :key="index"  :title="product.porduct.title" :sub-title="product.porduct.subTitle" :title-info="product.porduct.titleInfo" 
			:main-price="product.porduct.price" :sub-price="product.porduct.normalPrice" :isDemo="product.porduct.isDemo" :images="product.porduct.images" :main-specs1="product.porduct.mainSpec1"
			:main-specs2="product.porduct.mainSpec2" :main-specs3="product.porduct.mainSpec3"  
			:sub-specs="product.porduct.subspecs" :product-id="'product-' + index" :details-id="product._id"></ElementsProductsShowCaseProductCom>
		</TransitionGroup>
		<TransitionGroup name="list" v-if="checkFilter != ''">
			<ElementsProductsShowCaseProductCom v-for="(product, index) in filtedProducts" :key="index"  :title="product.title" :sub-title="product.subTitle" :title-info="product.titleInfo" 
			:main-price="product.price" :sub-price="product.normalPrice" :isDemo="product.isDemo" :images="product.images" :main-specs1="product.mainSpec1"
			:main-specs2="product.mainSpec2" :main-specs3="product.mainSpec3"  
			:sub-specs="product.subSpecs" :product-id="'product-' + index"></ElementsProductsShowCaseProductCom>
		</TransitionGroup>
		<div class="loader" v-if="filtedProducts.length == 0 && checkFilter != ''">loading....</div>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
import mapboxKey from '~/keys/mapbox'
import postCodes from '~/data/postCode'
const store = useStore()
const products = ref([])
const checkProducts = computed(() => store.allProduts)
const checkFilter = computed(()=> store.filterZipCode)
const filtedProducts = ref([])
async function  searchArea(cardPostCode){
	if(postCodes.includes(store.filterZipCode)){
		// convert search area zipcode to coords
		let cordsX = ""
		let cordsY = ""
		const {data: loaction} = await useFetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${store.filterZipCode}.json?country=DK&access_token=${mapboxKey}`);
		let gotloaction = loaction._rawValue
		let loactiondata = Object.entries(...gotloaction.features)
		for(let coord of loactiondata){
			if(coord.includes("center")){
				cordsX = coord[1][0]
				cordsY = coord[1][1]
			}
		}
		let center = {lat:cordsY, lng:cordsX}
		// convert zipcode of cars to coords
		let carCordsX = ""
		let carCordsY = ""
		const {data: carLoaction} = await useFetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cardPostCode}.json?country=DK&access_token=${mapboxKey}`);
		let gotCarloaction = carLoaction._rawValue
		let carLoactiondata = Object.entries(...gotCarloaction.features)
		for(let coord of carLoactiondata){
			if(coord.includes("center")){
				carCordsX = coord[1][0]
				carCordsY = coord[1][1]
			}
		}
		let carCenter = [carCordsY, carCordsX]
		function degreesToRadians(degrees){
			return degrees * Math.PI / 180;
		}
		checkIfInside(carCenter)
		function checkIfInside(spotCoords){
			let newRadius = earthDistanceInKm(spotCoords[0], spotCoords[1], center.lat, center.lng);
			if(newRadius < store.searchArea){
				// is ineside
				return cardPostCode
			} else if(newRadius > store.searchArea){
				// is outside
				return ""
			}
			else {
				// is same as center
				return cardPostCode
		}
		}
		function earthDistanceInKm(lat1, lon1, lat2, lon2){
			let earthRadiusKm = 6371;

			let dLat = degreesToRadians(lat2-lat1);
			let dLon = degreesToRadians(lon2-lon1);

			lat1 = degreesToRadians(lat1)
			lat2 =  degreesToRadians(lat2)

			let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
			let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

			return earthRadiusKm * c

		}
		if(checkIfInside(carCenter) != ""){
			return checkIfInside(carCenter)
		}
	}else{
		return "nonValid postCode"
	}

}
function checkSearchArea(){
	for(let filterProduct of products.value){
		searchArea(filterProduct.zipCode).then((value)=>{
		if(filterProduct.zipCode == value && store.filterZipCode != ""){
			filtedProducts.value = []
			filtedProducts.value.push(filterProduct)
		}
		})
	}
}
watch(checkFilter, async(newData, oldData) => {
	if(newData != oldData && newData != ""){
		checkSearchArea()
	}
	if(newData != oldData && newData == ""){
		filtedProducts.value = []
	}
})
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
	grid-template-rows: fit-content(100%);
	gap: 1.5rem;
	padding-left:1rem;
	padding-right:1rem;

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
@media(min-width:450px){
	.productContainer{
		grid-template-columns: 1fr;
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
@media(min-width:1220px){
	.productContainer{
		padding-right: 3rem;
		grid-template-columns: 1fr 1fr;
	}
}
@media(min-width:1700px){
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