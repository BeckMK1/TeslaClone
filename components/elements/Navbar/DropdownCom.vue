<template>
		<div class="imagelinkContainer" v-for="imageLink in imageLinks">
			<ElementsNavbarImageLinkCom :image="imageLink.image" :link="imageLink.link" :title="imageLink.title"></ElementsNavbarImageLinkCom>
		</div>
</template>
<script setup>
	const porps = defineProps({
		imageLinks:{
			default:[],
			type:Array
		},
	})
</script>
<style lang="scss" scoped>
	.imagelinkContainer{
		padding: 0 24px;
	}
</style>