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
        grid-template-columns: repeat(12, 1fr);
        margin-top: 3rem;
    }
    .filterContainer{
        grid-column: 1/3;
    }
    .productContainer{
        grid-column: 3/12;
    }
</style>