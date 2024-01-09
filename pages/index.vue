<template>
    <div @mouseenter="resetCurrent" class="mainContent"></div>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
    const store = useStore()
    function resetCurrent(){
	const mobile = window.matchMedia("(min-width:900px)")
		if(mobile.matches){
            store.flipNavDrop('')
	}
	}  
</script>
<style lang="scss">
@import "@/assets/scss/fonts";
html{
    overflow-x: hidden;
}
body{
    margin: 1rem;
}
.mainContent{
    min-height: 100vh;
}
</style>