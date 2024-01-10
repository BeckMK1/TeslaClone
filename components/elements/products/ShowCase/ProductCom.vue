<template>
	<div class="product">
		<div class="productTitle">
			<div class="title">
				<h3 class="title">{{title}}</h3>
				<p class="subtitle">{{subTitle}}</p>
				<p class="titleInfo">{{titleInfo}}</p>
			</div>
			<div class="price">
				<p class="mainPrice">{{mainPrice}}</p>
				<p class="subPrice">{{ subPrice }}</p>
				<p class="priceInfo">{{priceInfo}}</p>
			</div>
		</div>
		<div class="imageSliderContainer">
			<font-awesome-icon class="sliderArrow" icon="fa-solid fa-arrow-left" />
			<div v-for="image in images" class="imageSlider">
				<img :src="image" alt="">
			</div>
			<font-awesome-icon class="sliderArrow" icon="fa-solid fa-arrow-right" />
		</div>
		<div class="mainSpecs">
			<div v-for="mainSpec in mainSpecs" class="specsContainer">
				<div class="specs">
					<p>{{ mainSpec.number }}</p>
					<p>km</p>
				</div>
				<p class="specsInfo">{{mainSpec.text}}</p>
			</div>
		</div>
		<div class="subSpecs">
			<p v-for="subspec in subSpecs" class="spec">{{ subspec }}</p>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	title:{
		default:'',
		type:String
	},
	subTitle:{
		default:'',
		type:String
	},
	titleInfo:{
		default:'',
		type:String
	},
	mainPrice:{
		default:'',
		type:String
	},
	subPrice:{
		default:'',
		type:String
	},
	priceInfo:{
		default:'',
		type:String
	},
	images:{
		default:[],
		type:Array
	},
	mainSpecs:{
		default:[],
		type:Array
	},
	subSpecs:{
		default:[],
		type:Array
	},
})
</script>
<style lang="scss" scoped>
.product{
 padding: 1.5rem;
 background-color: white;
 border-radius: 0.5rem;
}
.productTitle{
	display: flex;
	justify-content: space-between;
	h3{
		margin: 0;
		font-size: 1.5rem;
	}
	.price{
		height: fit-content;
		width: fit-content;
		margin-left: auto;
		.mainPrice{
			font-weight: bold;
			font-size: 1.5rem;
		}
		.subPrice{
			text-decoration: line-through;
			font-size: 13px;
			width: fit-content;
		}
		.priceInfo{
			justify-self: end;
			grid-column: 2/2;
		}
		p{
			height: fit-content;
			margin: 0;
			margin-right: 0.5rem;
			align-self: center;
		}
	}
}
.imageSliderContainer{
	display: flex;
	align-items: center;
	padding: 1rem;
	.sliderArrow{
		transition: 250ms;
			opacity: 0%;
	}
	&:hover{
		.sliderArrow{
			transition: 250ms;
			opacity: 100%;
	}
	}
	.imageSlider{
		padding: 1rem;
		img{
			width: 100%;
			height:auto;
		}
	}
}
.mainSpecs{
	display: flex;
	justify-content: space-between;

	.specsContainer{
	width: 33%;
	display: flex;
	flex-direction: column;
		&:first-child{
		border-right: 1px solid gray;
		align-items: center;
		}
		&:nth-child(2){
			align-items: center;
		}
		&:last-child{
			border-left: 1px solid gray;
			align-items: center;
		}
	}
	.specs{
		display: flex;
		align-items: baseline;
		gap: 0.25rem;
		p:first-child{
			font-size: 1.5rem;
		font-weight: bold;

		}
	}
}
.subSpecs{
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-height: 200px;
	padding: 1rem;
}
@media(min-width:1020px){
	.productTitle{
		.price{
			display: grid;
			grid-template-rows: 100% 100%;
			grid-template-columns: fit-content(100%) 1fr;
		}
	}
}
</style>