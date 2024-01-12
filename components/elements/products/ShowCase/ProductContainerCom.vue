<template>
	<div class="productContainer">
		<TransitionGroup name="list">
			<ElementsProductsShowCaseProductCom v-for="product in filtedProducts" :key="product.title"  :title="product.title" :sub-title="product.subTitle" :title-info="product.titleInfo" 
			:main-price="product.mainPrice" :sub-price="product.subPrice" :price-info="product.priceInfo" :images="product.images" :main-specs="product.mainSpecs" 
			:sub-specs="product.subSpecs"></ElementsProductsShowCaseProductCom>
		</TransitionGroup>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const checFilter = computed(()=> store.productFilter)
const products = ref([
	{
		title:'Product 1',
		subTitle:'product 1 subtitle',
		titleInfo:'product 1 info',
		mainPrice:'324.325 kr',
		subPrice:'434.522 kr',
		priceInfo:'demobil',
		filterValues:[
			"Model S",
			"Performance firehjulstræk",
			"50 KM",
			"alle"
		],
		images:[
			"/images/nav/cars/carBlack.png",
		],
		mainSpecs:[
			{
				number:"420",
				text:"rækkevidde"
			},
			{
				number:"217",
				text:"TopHastighed"
			},
			{
				number:"6,9",
				text:"0-100 km/t"
			},
		],
		subSpecs:[
			'Deep Blue Metallic lak',
			'20" Induction-fælge',
		]
	},
	{
		title:'Product 2',
		subTitle:'Product 2 subtitle',
		titleInfo:'Product 2 info',
		mainPrice:'224.325 kr',
		subPrice:'334.522 kr',
		priceInfo:'demobil',
		filterValues:[
			"Model Y",
			"Long Range firehjulstræk",
			"50 KM",
			"alle"
		],
		images:[
			"/images/nav/cars/carBlue.png",
		],
		mainSpecs:[
			{
				number:"320",
				text:"rækkevidde"
			},
			{
				number:"250",
				text:"TopHastighed"
			},
			{
				number:"3,7",
				text:"0-100 km/t"
			},
		],
		subSpecs:[
			'Deep Blue Metallic lak',
			'20" Induction-fælge'
		]
	},
	{
		title:'Product 3',
		subTitle:'Product 3 subtitle',
		titleInfo:'Product 3 info',
		mainPrice:'224.325 kr',
		subPrice:'334.522 kr',
		priceInfo:'demobil',
		filterValues:[
			"Model S",
			"Long Range firehjulstræk",
			"100 KM",
			"alle"
		],
		images:[
			"/images/nav/cars/carSilver.png",
		],
		mainSpecs:[
			{
				number:"320",
				text:"rækkevidde"
			},
			{
				number:"250",
				text:"TopHastighed"
			},
			{
				number:"3,7",
				text:"0-100 km/t"
			},
		],
		subSpecs:[
			'Deep Blue Metallic lak',
			'20" Induction-fælge'
		]
	},
	{
		title:'Product 4',
		subTitle:'Product 4 subtitle',
		titleInfo:'Product 4 info',
		mainPrice:'224.325 kr',
		subPrice:'334.522 kr',
		priceInfo:'demobil',
		filterValues:[
			"Model Y",
			"Performance firehjulstræk",
			"200 KM",
			"alle"
		],
		images:[
			"/images/nav/cars/carRed.png",
		],
		mainSpecs:[
			{
				number:"320",
				text:"rækkevidde"
			},
			{
				number:"250",
				text:"TopHastighed"
			},
			{
				number:"3,7",
				text:"0-100 km/t"
			},
		],
		subSpecs:[
			'Deep Blue Metallic lak',
			'20" Induction-fælge'
		]
	},
	{
		title:'Product 5',
		subTitle:'Product 5 subtitle',
		titleInfo:'Product 5 info',
		mainPrice:'224.325 kr',
		subPrice:'334.522 kr',
		priceInfo:'demobil',
		filterValues:[
			"Model S",
			"Long Range firehjulstræk",
			"50 KM",
			"alle"
		],
		images:[
			"/images/nav/cars/carWhite.png",
		],
		mainSpecs:[
			{
				number:"320",
				text:"rækkevidde"
			},
			{
				number:"250",
				text:"TopHastighed"
			},
			{
				number:"3,7",
				text:"0-100 km/t"
			},
		],
		subSpecs:[
			'Deep Blue Metallic lak',
			'20" Induction-fælge'
		]
	}
])
const filtedProducts = ref([])
function filterModel(){
filtedProducts.value = products.value.filter((product) =>  store.productFilter.every(v => product.filterValues.includes(v)))
}
filterModel()
watch(checFilter, async(newData, oldData)=>{
	if(newData != oldData ){
		filterModel()
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