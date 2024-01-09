<template>
	<div @click="setCurrentMobile" class="textLinkContainer" :class="isMain == true ? 'mainTextLinkContainer': ''">
		<NuxtLink @mouseenter="setCurrent" class="navLink" :to="link"><p class="linkCta" v-if="isIcon == false">{{ title }}</p> <font-awesome-icon class="linkCta icon" v-if="isIcon == true" :icon="icon" /></NuxtLink>
		<font-awesome-icon class="mobileArrow" v-if="hasMobileSub == true" icon="fa-solid fa-chevron-right" />
	</div>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
	const emit = defineEmits(['sendData'])
	const props = defineProps({
		link:{
			default:'',
			type:String
		},
		title:{
			default:'',
			type:String
		},
		isIcon:{
			default:false,
			type:Boolean
		},
		icon:{
			default:"fa-solid fa-square",
			type:String
		},
		isMain:{
			default:false,
			type:Boolean
		},
		hasMobileSub:{
			default:false,
			type:Boolean
		}
	})
	const store = useStore()
	function setCurrent(){
	const mobile = window.matchMedia("(min-width:1200px)")
		if(mobile.matches){
		if(props.isMain == true){
			store.flipNavDrop(props.title)
		}
	}
	} 
	function setCurrentMobile(){
		const mobile = window.matchMedia("(max-width:1200px)")
		if(mobile.matches){
		if(props.isMain == true){
			store.flipNavDrop(props.title)
		}
	}
	}
</script>
<style lang="scss" scoped>
.textLinkContainer{
	max-height: fit-content;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	transition: 0.5s;
	.mobileArrow{
		display: block;
	}
	& .navLink:has(.fa-question){
		display: none;
	}
}
.mainTextLinkContainer{
	padding:0.75rem 1rem;
	border-radius: 0.5rem;
		&:hover{
			background-color: hsla(0, 0%, 30%, 10%);
			transition: 0.25s;
		}
		.navLink{
			p{
				font-weight: 400;
			}
		}
}
.navLink{
	margin-right:4px; 
	text-decoration: none;
	p{
		margin: 0 6px;

	}
}
.icon{
	height: 20px;
}
@media(min-width:450px){
}
@media(min-width:1200px){
	.textLinkContainer{
		& .navLink:has(.fa-question){
		display: block;
		}
		.mobileArrow{
			display: none;
		}
	}
	.mainTextLinkContainer{

	}
}
</style>