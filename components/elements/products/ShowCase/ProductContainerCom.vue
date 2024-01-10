<template>
	<div class="productContainer">
		<ElementsProductsShowCaseProductCom v-for="product in filtedProducts"  :title="product.title" :sub-title="product.subTitle" :title-info="product.titleInfo" 
		:main-price="product.mainPrice" :sub-price="product.subPrice" :price-info="product.priceInfo" :images="product.images" :main-specs="product.mainSpecs" 
		:sub-specs="product.subSpecs"></ElementsProductsShowCaseProductCom>
	</div>
</template>
<script setup>
const products = ref([
	{
		title:'Product 1',
		subTitle:'product 1 subtitle',
		titleInfo:'product 1 info',
		mainPrice:'324.325 kr',
		subPrice:'434.522 kr',
		priceInfo:'demobil',
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
const filtedProducts = ref([])
const productName = ref('Product 1')
function filterProducts(){
	filtedProducts.value = products.value.filter((product) => product.title == productName.value)
}
filterProducts()
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