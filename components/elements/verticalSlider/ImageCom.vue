<template>
	<div class="imageContainer">
		<img :src="image" alt="">
	</div>
</template>
<script setup>
const props = defineProps({
	image:{
		default:'',
		type:String
	}
})
</script>
<style lang="scss" scoped>
.imageContainer{
	width:100vw;
	height: 100vh;
	position: absolute;
	z-index: 1;
}
img{
	width:100vw;
	height: 100vh;
	object-fit: cover;
}
</style>