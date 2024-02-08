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
				<div class="imageSlider" :class="productId">
						<img v-for="image in images" :src="image" alt="">
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
			<NuxtLink :to="'details/' + detailsId" class="detailsBtn"><p>Se details</p></NuxtLink>
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
	},
	detailsId:{
		default:"",
		type:String
	}
})
function sliderRight(){
	const slider = document.querySelectorAll("." + props.productId);
	const slideImage = document.querySelector(".imageSlider img");
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
	const slideImage = document.querySelector(".imageSlider img");
	for(let slide of slider){
		if(slide.classList.contains(props.productId)){
			slide.scrollLeft -= slideImage.scrollWidth
		}
	}

}
function imageSlider(){
	const sliderContainers = document.querySelectorAll(".imageSlider");
	for(let sliderContainer of sliderContainers){
	const slideImage = sliderContainer.querySelector("img");
	sliderContainer.style.width = slideImage.offsetWidth + "px";
	}
}
onMounted(()=>{
	imageSlider()
	window.addEventListener("resize", ()=>{
	imageSlider()
	})
})
</script>
<style lang="scss" scoped>
.product{
 padding: 1.5rem;
 background-color: white;
 border-radius: 0.5rem;
 max-height: fit-content;
 &:hover{
	
	.mainSpecs .detailsBtn{
			opacity: 100%;
			pointer-events: auto;
			transition: opacity 250ms;
		}
	}
}
.productTitle{
	display: flex;
	flex-direction: column;
	align-items: center;
	h3{
		margin: 0;
		font-size: 1.5rem;
		text-align: center;
	}
	p{
		text-align: center;
	}
	.price{
		height: fit-content;
		width: fit-content;
		margin-top: 1rem;
		.mainPrice{
			font-weight: bold;
			font-size: 1.5rem;
		}
		.subPrice{
			text-decoration: line-through;
			font-size: 13px;
			text-align: center;
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
	justify-content: center;
	padding: 1rem 0;
	width: 100%;
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
	.imageSlider{
		overflow-x: scroll;
		scroll-behavior: smooth;
		width: 100%;
		-ms-overflow-style: none;
 		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
		display: flex;
	}
	img{
		object-fit: contain;
		width: 100%;
		height: auto;
		width: 200px;
	}
}
.mainSpecs{
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	position: relative;
	.specsContainer{
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-bottom: 0.5rem;
		&:first-child{
		border-bottom: 1px solid gray;
		align-items: center;
		}
		&:nth-child(2){
			border-bottom: 1px solid gray;
			align-items: center;
		}
		&:nth-child(3){

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
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		color: black;
		text-decoration: none;
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
		&:hover{
			background-color: black;
			color: white;
		}
	}
}
.subSpecs{
	display:grid;
	grid-template-columns: 1fr 1fr;
	padding: 1rem;
	.spec{
		justify-self: center;
	}
}
@media(min-width:450px){
	.productTitle{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	h3{
		text-align: start;
	}
	p{
		text-align: start;
	}
	.price{
		margin-left: auto;
		margin-top: 0;
	}
	.subPrice{
		width: fit-content;
	}
	}
	.mainSpecs{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		.specsContainer{
			width: 33%;
			width: 100%;
			&:first-child{
			border-right: 1px solid gray;
			border-bottom: none;
			}
			&:nth-child(2){
				align-items: center;
				border-bottom: none;
			}
			&:nth-child(3){
				border-left: 1px solid gray;
				align-items: center;
			}
		}
	}
	.subSpecs{
	grid-template-columns: 1fr 1fr 1fr 1fr;
	padding: 1rem;
	.spec{
		justify-self: center;
	}
}
.imageSliderContainer{
	.imageSlider{
		img{
			object-fit: contain;
			width: 100%;
			height: auto;
			min-width: 300px;
		}
	}
}
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