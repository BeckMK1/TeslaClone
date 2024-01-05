<template>
	<div>
        <div class="image">
            <img :src="image" alt="">
            <p class="navTitle">{{ title }}</p>
            <NuxtLink class="link" :to="link">Info</NuxtLink>
        </div>
	</div>
</template>
<script setup>
const props = defineProps({
    image:{
        default:'',
        type:String
    },
    title:{
        default:'',
        type:String
    },
    link:{
        default:'#',
        type:String
    },
})
</script>
<style lang="scss" scoped>
    .image{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
            transform: scaleX(-1);
        }
    }
</style>