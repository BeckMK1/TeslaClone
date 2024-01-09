<template>
    <div @mouseenter="resetCurrent" class="mainContent">
        <ElementsVerticalSliderContainerCom></ElementsVerticalSliderContainerCom>
    </div>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
    const store = useStore()
    function resetCurrent(){
	const mobile = window.matchMedia("(min-width:1200px)")
		if(mobile.matches){
            store.flipNavDrop('')
	}
	}  
</script>
<style lang="scss">
@import "@/assets/scss/fonts";
html{
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
}
body{
    margin: 0;
}
.mainContent{
    min-height: 100vh;
    background-color: red;
}
</style>