<template>
	<div class="details">
        <div class="imageSliderContainer">
            <font-awesome-icon class="sliderBtn" @click="sliderLeft" icon="fa-solid fa-chevron-left" />
            <div class="ImageSliderInner">
                <div class="images" v-for="image in product.images"><img :src="image"></div>
            </div>
            <font-awesome-icon class="sliderBtn" @click="sliderRight" icon="fa-solid fa-chevron-right" />
        </div>
        <div class="content">
            <div class="content-inner">
                <h1>{{ product.title }}</h1>
                <p class="subTitle">{{ product.subTitle }}</p>
                <div class="mainSpec">
                    <p>{{ product.mainSpec1 }}</p>
                    <p>{{ product.mainSpec2 }}</p>
                    <p>{{ product.mainSpec3 }}</p>
                </div>
            </div>
            <div class="content-inner">
                <h2>Oplysninger om bil</h2>
                <ul><li v-for="subSpec in product.subspecs">{{ subSpec }}</li></ul>
                
            </div>
        </div>
	</div>
</template>
<script setup>
const product = ref([])
const route = useRoute()
async function getProductById(){
    const {data: data, } = await useFetch(`http://localhost:3002/api/getId/${route.params.id}`);
    const rawData = Object.values(data._rawValue)
    product.value = rawData[1]
}
getProductById()
function sliderRight(){
	const slider = document.querySelector(".ImageSliderInner");
	const slideImage = document.querySelector(".ImageSliderInner .images");
    slider.scrollLeft += slideImage.scrollWidth

}
function sliderLeft(){
	const slider = document.querySelector(".ImageSliderInner");
	const slideImage = document.querySelector(".ImageSliderInner .images");
    slider.scrollLeft -= slideImage.scrollWidth


}
</script>
<style lang="scss" scoped>
    .details{
        display: grid;
        grid-template-columns: 1fr;
        height: calc(100vh - 100px);
        margin-top: 60px;
        margin-right:1rem;
        margin-left:1rem;
        .imageSliderContainer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            // margin-left: 6rem;
            // margin-right: 6rem;
            .sliderBtn{
                cursor: pointer;
            }
            .ImageSliderInner{
                overflow-x: scroll;
                display: flex;
                width: 80vw;
                scroll-behavior: smooth;
                -ms-overflow-style: none;
                scrollbar-width: none;
                &::-webkit-scrollbar {
                    display: none;
                }
            }
            .images{
                img{
                    object-fit: contain;
                    width: 100%;
                    height: auto;
                    width: 80vw;
                }
            }
        }
        .content{
            display: grid;
            gap: 3rem;
            grid-auto-rows: fit-content(100%);
            width: 100%;
            overflow-y: auto;
            .content-inner{
                h1{
                    text-align: center;
                    margin-bottom: 0;
                }
                .subTitle{
                    text-align: center;
                    font-weight: bold;
                }
                .mainSpec{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    margin-top: 1rem;
                    width: 100%;
                }
            }
        }
    }
    @media(min-width:986px){
        .details{
            grid-template-columns: minmax(300px, 70%) 1fr;
            margin-right:0;
            margin-left:0;
            .imageSliderContainer{
                margin-left: 4rem;
                margin-right: 4rem;
                .ImageSliderInner{
                    width: 50vw;
                    .images{
                        img{
                            width: 50vw;
                        }
                    }
                }
            }
        }
    }
    @media(min-width:1500px){
        .details{
            grid-template-columns: minmax(300px, 80%) 1fr;
            .imageSliderContainer{
                margin-left: 6rem;
                margin-right: 6rem;
            }
        }
    }
</style>