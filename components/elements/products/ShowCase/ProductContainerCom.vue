<template>
	<div class="productContainer">
		<ElementsProductsShowCaseProductCom v-for="product in filtedProducts"  :title="product.title" :sub-title="product.subTitle" :title-info="product.titleInfo" 
		:main-price="product.mainPrice" :sub-price="product.subPrice" :price-info="product.priceInfo" :images="product.images" :main-specs="product.mainSpecs" 
		:sub-specs="product.subSpecs"></ElementsProductsShowCaseProductCom>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const checkModel = computed(()=>store.model)
const checkIndenFor = computed(()=> store.indenFor)
const checFilter = computed(()=> store.productFilter)
const products = ref([
	{
		title:'Product 1',
		subTitle:'product 1 subtitle',
		titleInfo:'product 1 info',
		mainPrice:'324.325 kr',
		subPrice:'434.522 kr',
		priceInfo:'demobil',
		model:"Model S",
		udstyr:'Performance firehjulstræk',
		idenFor:'50 KM',
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
		model:"Model S",
		udstyr:'Long Range firehjulstræk',
		idenFor:'100 KM',
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
		model:"Model Y",
		udstyr:'Long Range firehjulstræk',
		idenFor:'50 KM',
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
		model:"Model Y",
		udstyr:'Long Range firehjulstræk',
		idenFor:'100 KM',
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
	}
])
const modeles = ref([])
const filtedProducts = ref([])
function filterModel(){
	modeles.value = products.value.filter((product) => (store.model.includes(product.model) && store.indenFor.includes(product.idenFor)) 
	|| (store.model.includes(product.model) && store.indenFor.includes("alle")) )
	filtedProducts.value = modeles.value
}
filterModel()
function filterProducts(){
		filtedProducts.value = modeles.value.filter((product) => store.productFilter.includes(product.udstyr))
}
watch([checkModel, checkIndenFor], async([newModel, newIndenFor],[oldModel, oldIndenFor])=>{
	if(newModel != oldModel || newIndenFor != oldIndenFor){
		filterModel()
	}
})
watch(checFilter, async(newValue, oldValue)=>{
	if(newValue != oldValue && newValue.length != 0){
		filterProducts()
	} else{
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
@media(min-width:1020px){
	.productContainer{
		grid-template-columns: 1fr 1fr;
	}
}
@media(min-width:1800px){
	.productContainer{
		grid-template-columns: 1fr 1fr 1fr;
	}
}
</style>