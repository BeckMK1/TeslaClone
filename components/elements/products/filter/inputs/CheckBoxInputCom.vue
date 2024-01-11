<template>
	<div class="checkBox" v-for="label in labels">
        <input type="checkbox" name="" id="" :value="label" v-model="inputValue">
        <label for="">{{ label }}</label>
	</div>
</template>
<script setup>
const emits = defineEmits(['sendInput'])
const props = defineProps({
	labels:{
		default:[],
		type:Array
	}
})
const inputValue = ref([])
watch(inputValue, async(newValue, oldValue)=>{
    if(newValue != oldValue){
        emits('sendInput', inputValue.value)
    }
})
</script>
<style lang="scss" scoped>
.checkBox{
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}
input{
    margin-right: 0.50rem;
    height: 1.5rem;
    width: 1.5rem;
}
</style>