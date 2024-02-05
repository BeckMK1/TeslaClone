<template>
    <div class="productPage">
        <div class="pageTitle">
            <h2>Produkt side</h2>
        </div>
        <div class="pageContent">
            <div class="mobileFilters">
                <div class="spoiler" @click="filterOpen = !filterOpen">
                    <h3>Filters</h3>
                    <font-awesome-icon class="filterIcon" :class="filterOpen == true ? 'iconOpen': 'iconClosed'" icon="fa-solid fa-chevron-right" />
                </div>
                <div class="content" :class="filterOpen == true ? 'filterOpen': 'filterClosed'">
                    <ElementsProductsFilterContainerCom></ElementsProductsFilterContainerCom>
                </div>
            </div>
            <div class="desktopFilter">
                <ElementsProductsFilterContainerCom></ElementsProductsFilterContainerCom>
            </div>
            <ElementsProductsShowCaseProductContainerCom></ElementsProductsShowCaseProductContainerCom>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
const checkFilter = computed(()=>store.productFilter)
const filterOpen = ref(false)
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
        grid-template-columns: repeat(24, 1fr);

    }
    .desktopFilter{
            display: none;
    }
    .mobileFilters{
            display: block;
            grid-column: 1/25;
            .spoiler{
                padding: 1rem 3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: hsl(0, 0%, 90%);
                .filterIcon{
                    z-index: 0;
                    position: relative;
                }
                .iconOpen{
                    transform: rotate(90deg);
                    transition: 250ms;
                }
                .iconClosed{
                    transform: rotate(0deg);
                    transition: 250ms;
                }
            }
            .content{
                overflow: hidden;
                transition: 500ms;
                padding-top: 1rem;
            }
        }
        .filterContainer{
        grid-column: 1/24;
    }
    .productContainer{
        grid-column: 1/25;
    }
    @media(min-width:450px){
    .filterContainer{
        grid-column: 1/24;
    }
    .productContainer{
        grid-column: 2/24;
    }
    }
    @media(min-width:1460px){
        
        .pageContent{
            padding-top: 100px;
            margin-top: 3rem;
        }
        .desktopFilter{
            display: block;
            grid-column: 1/6;
        }
        .mobileFilters{
            display: none;
        }
        .productContainer{
            grid-column: 6/24;
        }
    }
</style>