<template>
	<div class="videoContainer">
		<video	class="slideVideo" autoplay muted loop>
			<source :src="video" type="video/mp4">
		</video>
	</div>
</template>
<script setup>
const props = defineProps({
	video:{
		default:'',
		type:String
	},
	active:{
		default:false,
		type:Boolean
	}
})
const videoActive = computed(()=> props.active)
watch(videoActive, async(newValue)=>{
	if(newValue == true){
		document.querySelector(".slideVideo").muted = true;
		document.querySelector(".slideVideo").autoplay = true;
		document.querySelector(".slideVideo").loop = true;
		document.querySelector(".slideVideo").play()
		console.log(document.querySelector(".slideVideo"))
	}else {
		document.querySelector(".slideVideo").pause();
		document.querySelector(".slideVideo").currentTime = 0;
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