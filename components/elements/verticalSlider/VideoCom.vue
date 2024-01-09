<template>
	<div class="videoContainer">
		<video v-if="video != ''" autoplay loop >
			<source :src="video" type="video/mp4">
		</video>
	</div>
</template>
<script setup>
const props = defineProps({
	video:{
		default:'',
		type:String
	}
})
</script>
<style lang="scss" scoped>
.videoContainer{
	width:100vw;
	height: 100vh;
	position: absolute;
	z-index: 1;
}
video{
	width:100vw;
	height: 100vh;
	object-fit: cover;
}
</style>