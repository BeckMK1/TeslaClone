<template>
	<div>
        <div class="slide" :id="'slide-' + index" v-for="(slide, index) in Slides">
            <ElementsVerticalSliderImageCom  v-if="slide.mediaType == 'image'" :image="slide.media"></ElementsVerticalSliderImageCom>
            <ElementsVerticalSliderVideoCom v-if="slide.mediaType == 'video'" :video="slide.media" :active="slide.active"></ElementsVerticalSliderVideoCom>
            <div class="sliderContent" v-show="slide.active == true">
                <h2 class="title" :class="slide.colors">{{ slide.title }}</h2>
                <div class="btnContainer">
                    <NuxtLink class="btn" :to="slide.btn1Link">{{slide.btn1Title}}</NuxtLink>
                    <NuxtLink class="btn" to="#">{{slide.btn2Title}}</NuxtLink>
                </div>
            </div>
        </div>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const Slides = ref([])
function setColor(){
    for(let slide of Slides.value){
        if(slide.active == true){
            store.setMenuColor(slide.colors)
        }else{
        }
    }
}
function setSlides(){
    for(let slide of store.allSlides){
        Slides.value.push(slide.slides)

    }
}
setSlides()
function setSlideObserver(){
	const slidesContent = document.querySelectorAll( ".slide");
	let options = {
    threshold: 0.1
  };
let callback = (entries, observer) => {
  entries.forEach((entry) =>{
	if(entry.isIntersecting == true){
       for(let [index, slide] of Slides.value.entries()){
            if(entry.target.id == 'slide-' + index ){
                slide.active = true
                setColor()
            }else{
                slide.active = false
                setColor()
            }
        }
	}
 })
}
let observer =  new IntersectionObserver(callback, options);
for (let slide of slidesContent) {
    observer.observe(slide);
}
}
onMounted(()=>{
    setSlideObserver()
})
</script>
<style lang="scss" scoped>
@import "@/assets/scss/colors";
.sliderContent{
    position: fixed;
    z-index: 10;
    height: 90%;
    margin-top: auto;
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    top: 10%;
    left: 0;
    h2{
        animation: fadeIN 1s forwards ease;
        font-size: 2.5rem;
        transition: 250ms;
        opacity: 0;
    }
}
@keyframes fadeIN{
    from{
        transform: translateY(-50px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
.btnContainer{
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: hsla(0, 0%, 100%, 60%);
        border-radius: 0.5rem;
        color: black;
        width: 100%;
        height: 45px;
        backdrop-filter: blur(16px);
        text-decoration: none;
    &:nth-child(1){
        animation: btnLeft 1s forwards ease;
    }
    &:nth-child(2){
        background-color: hsla(0, 0%, 20%, 60%);
        color: white;
        animation: btnRight 1s forwards ease;
    }
    @keyframes btnLeft {
        from{
            transform: translateX(-50px);
            opacity: 0;
        }
        to{
            transform: translateX(0px);
            opacity: 1;
        }
    }
    @keyframes btnRight {
        from{
            transform: translateX(50px);
            opacity: 0;
        }
        to{
            transform: translateX(0px);
            opacity: 1;
        }
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
        grid-template-columns: 20% 20%;
        justify-content: center;
        .btn{
        }
    }
}
</style>