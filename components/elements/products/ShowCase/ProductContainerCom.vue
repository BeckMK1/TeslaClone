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
import mapboxKey from '~/keys/mapbox'
const store = useStore()
const products = ref([])
const checkProducts = computed(() => store.allProduts)
const checFilter = computed(()=> store.productFilter)
const filtedProducts = ref([])
async function  searchArea(){
	let testInput = 6800
	if(testInput >= 1000 && testInput <= 9990){
		let testCord = [55.6333308, 8.4833314 ]
		let cordsX = ""
		let cordsY = ""
		const {data: loaction} = await useFetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${testInput}.json?country=DK&access_token=${mapboxKey}`);
		let gotloaction = loaction._rawValue
		console.log(gotloaction)
		let loactiondata = Object.entries(...gotloaction.features)
		for(let coord of loactiondata){
			if(coord.includes("center")){
				cordsX = coord[1][0]
				cordsY = coord[1][1]
			}
		}
		let center = {lat:cordsY, lng:cordsX}
		console.log("center: " + center.lat)
		function degreesToRadians(degrees){
			return degrees * Math.PI / 180;
		}
		checkIfInside(testCord)
		function checkIfInside(spotCoords){
			let newRadius = earthDistanceInKm(spotCoords[0], spotCoords[1], center.lat, center.lng);
			if(newRadius < store.searchArea){
				console.log("inside")
			} else if(newRadius > store.searchArea){
				console.log('outside')
			}
			else {
			console.log('on the circle')
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
	}

}
searchArea()
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