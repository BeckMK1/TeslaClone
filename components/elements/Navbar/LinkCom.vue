<template>
	<div>
		<NuxtLink v-on="{mouseOver: sendLink}" class="navLink" :to="link"><p class="linkCta" v-if="isIcon == false">{{ title }}</p> <font-awesome-icon class="linkCta icon" v-if="isIcon == true" :icon="icon" /></NuxtLink>
	</div>
</template>
<script setup>
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
		}
	}) 
	function sendLink(){
		emit('sendData', props.title)
	}
</script>
<style lang="scss" scoped>
.navLink{
	margin-right:4px; 
	padding: 8px;
	text-decoration: none;
	p{
		margin: 0 6px;
	}
}
.icon{
	height: 20px;
}

</style>