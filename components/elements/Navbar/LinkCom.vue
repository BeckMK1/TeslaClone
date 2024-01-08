<template>
	<div class="textLinkContainer">
		<NuxtLink @mouseenter="setCurrent" class="navLink" :to="link"><p class="linkCta" v-if="isIcon == false">{{ title }}</p> <font-awesome-icon class="linkCta icon" v-if="isIcon == true" :icon="icon" /></NuxtLink>
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
		}
	})
	const store = useStore()
	function setCurrent(){
		if(props.isMain == true){
			store.flipNavDrop(props.title)
		}
	} 
</script>
<style lang="scss" scoped>
.textLinkContainer{
	max-height: fit-content;
	padding-bottom: 1rem;
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
	.textLinkContainer{
	padding-bottom: 0rem;
}
}
</style>