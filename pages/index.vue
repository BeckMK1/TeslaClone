<template>
    <div @mouseenter="store.flipNavDrop('')" class="mainContent"></div>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
    const store = useStore() 
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