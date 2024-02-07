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
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    top: 10%;
    h2{
        font-size: 2.5rem;
        transition: 250ms;
    }
}
.btnContainer{
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    .btn{
    background-color: hsla(0, 0%, 100%, 60%);
    border-radius: 0.5rem;
    color: black;
    padding: 0.75rem;
    width: 90%;
    margin-right: auto;
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
        }
    }
}
</style>