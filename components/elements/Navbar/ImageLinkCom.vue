<template>
	<div>
        <div class="image">
            <img :src="image" alt="">
            <div class="imageNavText">
                <p class="navTitle">{{ title }}</p>
                <NuxtLink class="link" :to="link">Info</NuxtLink>
            </div>
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
    .navTitle{
        margin: 0;
    }
    .image{
        display: flex;
        align-items: center;
        gap: 2rem;
        img{
            height: auto;
            max-width: 160px;
            object-fit: contain;
            width: 100%;
            transform: scaleX(-1);
        }
    }
    .imageNavText{
        width: 100%;
        min-width: 100px;
    }
    @media(min-width:450px){
        .image{
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;
            img{
                max-width: 220px; 
            }
        }
        .imageNavText{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>