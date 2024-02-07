<template>
    <div class="productPage">
        <div class="pageTitle">
            <h2>Produkt side</h2>
        </div>
        <div class="pageContent">
            <div class="mobileBtnContainer">
                <button @click="filterModelOpen = true">Filter</button>
            </div>
            <div class="desktopFilter">
                <ElementsProductsFilterContainerCom></ElementsProductsFilterContainerCom>
            </div>
            <ElementsProductsShowCaseProductContainerCom></ElementsProductsShowCaseProductContainerCom>
            <Teleport to="body">
                <div class="mobileFilter" v-if="filterModelOpen">
                <font-awesome-icon class="closeBtn" @click="filterModelOpen = false" icon="fa-solid fa-x" />
                <ElementsProductsFilterContainerCom></ElementsProductsFilterContainerCom>
                </div>
            </Teleport>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const checkFilter = computed(()=>store.productFilter)
const filterOpen = ref(false)
const filterModelOpen = ref(false)
function menuColor(){
    store.setMenuColor('')
}
async function getProducts(){
    const {data: product, } = await useFetch(`http://localhost:3002/api/getOne?filters=${store.productFilter}`);
    store.setProducts(product._rawValue)
}
menuColor()
watch(filterOpen, async(newData) =>{
    if(newData == true){
        const filterContant = document.querySelector(".content");
        filterContant.style.height = filterContant.scrollHeight + "px"
    }else {
        const filterContant = document.querySelector(".content");
        filterContant.style.height = 0
    }
})
function imageSlider(){
	const sliderContainers = document.querySelectorAll(".imageSlider");
	for(let sliderContainer of sliderContainers){
		const slideImage = sliderContainer.querySelector("img");
	sliderContainer.style.width = slideImage.offsetWidth + "px";
	}
}
onMounted(()=>{
	imageSlider()
})
watch(filterModelOpen, async(newData, oldData) =>{
    if(newData != oldData){
        store.flipModal(filterModelOpen.value)
    }
})

watch(checkFilter, async(newData, oldData)=>{
    if(newData != oldData){
        getProducts()
    }
})
</script>
<style lang="scss" scoped>
@import"@/assets/scss/colors";
    .productPage{
        min-height: 100vh;
        background-color:$bgGray;
    }
    .pageTitle{
        width: 100vw;
        top:-3rem;
        padding: 1.5rem 3rem;
        padding-top:4rem ;
        background-color: white;
        position: sticky;
        z-index: 2;
    }
    .pageContent{
        padding-bottom: 1.5rem;
        display: grid;
        grid-template-columns: 1fr;
    }
    .desktopFilter{
            display: none;
    }
    .mobileBtnContainer{
        display: block;
        width: 100%;
        padding: 1rem 1rem;
        background-color: white;
        margin-bottom: 1rem;
        button{
            width: 50%;
            border: none;
            background-color: hsl(0, 0%, 95%);
            padding: 0.75rem 0;
            border-radius: 0.5rem;
            font-weight: bold;
            cursor: pointer;
            transition: 250ms;
            &:hover{
                background-color: hsl(0, 0%, 90%);
                transition: 250ms;
            }
        }
    }
    .mobileFilter{
        position: fixed;
        top: 20%;
        background-color: white;
        width: 90%;
        left: 5%;
        z-index: 101;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 1rem;
        .closeBtn{
            position: absolute;
            right: 1rem;
            top: 1rem;
            cursor: pointer;
        }
    }
    @media(min-width:760px){
    .mobileBtnContainer{
        display: none;
    }
    .pageContent{
        grid-template-columns: minmax(300px, 33%) 1fr;
        margin-top: 100px;
    }
    .desktopFilter{
        display: block;
    }
    }
    @media(min-width:1700px){
        .pageContent{
            grid-template-columns: minmax(300px, 25%) 1fr;
            padding-top: 100px;
            margin-top: 3rem;
        }
        .desktopFilter{
            display: block;
        }
        .mobileFilters{
            display: none;
        }
    }
</style>