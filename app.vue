<template>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
  </template>
  <script setup>
  import { useStore } from '~/store/glStore'
  const store = useStore()
  async function getSlides(){
      const {data: slides} = await useFetch('http://localhost:3002/api/getAllSlides');
      store.setslides(slides._rawValue)
    }
      getSlides()
</script>
  <style lang="scss">
    p{
        margin: 0;
    }
    .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  // filter: blur(1rem);
}
</style>