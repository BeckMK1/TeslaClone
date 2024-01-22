<template>
    <div class="productPage">
        <div class="pageTitle">
            <h2>Produkt side</h2>
        </div>
        <div class="pageContent">
            <ElementsProductsFilterContainerCom></ElementsProductsFilterContainerCom>
            <ElementsProductsShowCaseProductContainerCom></ElementsProductsShowCaseProductContainerCom>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
const store = useStore()
function menuColor(){
    store.setMenuColor('')
}
// async function getProducts(){
//     const {data: product, } = await useFetch('http://localhost:3002/api/getOne', {
//         query:{parm1: store.filtedProducts}
//     });
//     store.setProducts(product._rawValue)
// 	}
    async function getProducts(){
    const {data: product, } = await useFetch('http://localhost:3002/api/getAll');
    store.setProducts(product._rawValue)
	}
    getProducts()
menuColor()
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
    }
    .pageContent{
        padding-top: 100px;
        padding-bottom: 1.5rem;
        display: grid;
        grid-template-columns: repeat(24, 1fr);
        margin-top: 3rem;
    }
    .filterContainer{
        grid-column: 1/6;
    }
    .productContainer{
        grid-column: 6/24;
    }
</style>