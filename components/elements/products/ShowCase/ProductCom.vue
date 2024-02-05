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
				<p class="priceInfo" v-if="isDemo == true">demobil</p>
			</div>
		</div>
		<div class="imageSliderContainer">
			<font-awesome-icon @click="sliderLeft" class="sliderArrow" icon="fa-solid fa-arrow-left" />
			<div class="sliderWrapper" :class="productId">
				<div class="imageSlider">
						<img v-for="image in images" :src="image" alt="">
				</div>
			</div>
			<font-awesome-icon @click="sliderRight" class="sliderArrow" icon="fa-solid fa-arrow-right" />
		</div>
		<div class="mainSpecs">
			<div class="specsContainer">
				<div class="specs">
					<p>{{ mainSpecs1 }}</p>
				</div>
				<p class="specsInfo"></p>
			</div>
			<div class="specsContainer">
				<div class="specs">
					<p>{{ mainSpecs2  }}</p>
				</div>
				<p class="specsInfo"></p>
			</div>
			<div class="specsContainer">
				<div class="specs">
					<p>{{ mainSpecs3  }}</p>
				</div>
				<p class="specsInfo"></p>
			</div>
			<button class="detailsBtn"><p>Se details</p></button>
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
	isDemo:{
		default:false,
		type:Boolean
	},
	images:{
		default:[],
		type:Array
	},
	mainSpecs1:{
		default:"",
		type:String
	},
	mainSpecs2:{
		default:"",
		type:String
	},
	mainSpecs3:{
		default:"",
		type:String
	},
	subSpecs:{
		default:[],
		type:Array
	},
	productId:{
		default:"",
		type:String
	}
})
function sliderRight(){
	const slider = document.querySelectorAll("." + props.productId);
	const slideImage = document.querySelector(".imageSlider");
	for(let slide of slider){
		if(slide.classList.contains(props.productId)){
			slide.scrollLeft += slideImage.scrollWidth
			if((slide.scrollWidth / 2) == slide.scrollLeft){
				slide.scrollLeft = 0
			}
		}
	}

}
function sliderLeft(){
	const slider = document.querySelectorAll("." + props.productId);
	const slideImage = document.querySelector(".imageSlider");
	for(let slide of slider){
		if(slide.classList.contains(props.productId)){
			slide.scrollLeft -= slideImage.scrollWidth
		}
	}

}
</script>
<style lang="scss" scoped>
.product{
 padding: 1.5rem;
 background-color: white;
 border-radius: 0.5rem;
 max-height: fit-content;
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
	padding: 1rem 0;
	width: 300px;
	.sliderArrow{
		transition: 250ms;
			opacity: 0%;
			position: relative;
			z-index: 10;
			margin-left: 1rem;
			margin-right: 1rem;
			cursor: pointer;
	}
	&:hover{
		.sliderArrow{
			transition: 250ms;
			opacity: 100%;
	}
	}
	.sliderWrapper{
		overflow-x: scroll;
		scroll-behavior: smooth;
		min-width: 300px;
		-ms-overflow-style: none;
 		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	.imageSlider{
		display: flex;
		overflow: hidden;
		width:fit-content;
	}
	img{
		object-fit: contain;
		max-width:300px;
		max-height:200px;
	}
}
.mainSpecs{
	display: flex;
	justify-content: space-between;
	position: relative;
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
		&:nth-child(3){
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
	.detailsBtn{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: white;
		border: 2px solid black;
		border-radius: 0.5rem;
		opacity:0%;
		pointer-events: none;
		cursor: pointer;
		transition: opacity 250ms;
		p{
			font-size: 1.10rem;
			font-weight: 600;
		}
	}
	&:hover{
		.detailsBtn{
			opacity: 100%;
			pointer-events: auto;
			transition: opacity 250ms;
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