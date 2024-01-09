<template>
	<div>
        <div class="slide" v-for="slide in Slides">
            <ElementsVerticalSliderImageCom :image="slide.image"></ElementsVerticalSliderImageCom>
            <ElementsVerticalSliderVideoCom :video="slide.video"></ElementsVerticalSliderVideoCom>
            <div class="sliderContent">
                <h2>{{ slide.title }}</h2>
                <div class="btnContainer">
                    <NuxtLink class="btn" to="#">{{slide.btn1}}</NuxtLink>
                    <NuxtLink class="btn" to="#">{{slide.btn2}}</NuxtLink>
                </div>
            </div>
        </div>
	</div>
</template>
<script setup>
const Slides = ref([
    {
        title:'Car Y',
        image:'',
        video:'/images/slider/video/carVideo.mp4',
        btn1:'se produkter',
        btn2:'design din egen'
    },
    {
        title:'',
        image:'/images/slider/images/sliderCar2.jpg',
        video:'',
        btn1:'se produkter',
        btn2:'design din egen'
    },
    {
        title:'',
        image:'/images/slider/images/sliderCarCharger.jpg',
        video:'',
        btn1:'se produkter',
        btn2:'design din egen'
    },
    {
        title:'',
        image:'/images/slider/images/sliderSolar.jpg',
        video:'',
        btn1:'se produkter',
        btn2:'design din egen'
    },
])
</script>
<style lang="scss" scoped>
.sliderContent{
    position: relative;
    z-index: 2;
    height: 90%;
    margin-top: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    h2{
        font-size: 2.5rem;
    }
}
.btnContainer{
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    width: 100%;
    .btn{
    background-color: hsla(0, 0%, 100%, 60%);
    border-radius: 0.5rem;
    padding: 0.75rem;
    color: black;
    backdrop-filter: blur(16px);
    text-decoration: none;
    &:nth-child(2){
        background-color: hsla(0, 0%, 20%, 60%);
        color: white;
    }
    }
}
.slide{
    display: flex;
    align-items: flex-end;
    height: 100vh;
    width: 100vw;
    scroll-snap-align: center;
}
@media (min-width:1200px){
    .btnContainer{
        justify-content: center;
        flex-direction: row;
        .btn{
            padding: 0.75rem 7rem;
        }
    }
}
</style>