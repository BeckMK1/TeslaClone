<template>
    <div class="mainContent">
        <ElementsVerticalSliderContainerCom></ElementsVerticalSliderContainerCom>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
@import "@/assets/scss/fonts";
html{
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
}
body{
    margin: 0;
}
.mainContent{
    min-height: 100vh;
}
</style>