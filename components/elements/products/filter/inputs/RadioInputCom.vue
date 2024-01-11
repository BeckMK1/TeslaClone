<template>
	<div class="radio">
		<input type="radio" :name="radioType" :value="label" v-model="inputValue">
		<label :for="radioType">{{label}}</label>
	</div>
</template>
<script setup>
const props = defineProps({
	radioType:{
		default:'',
		type:String
	},
	label:{
		default:'',
		type:String
	}
})
const emits = defineEmits(['sendInput'])
const inputValue = ref("")
watch(inputValue, async(newValue, oldValue)=>{
    if(newValue != oldValue && inputValue.value != ""){
        emits("sendInput", inputValue.value)
        inputValue.value = ""
    }
})
</script>
<style lang="scss" scoped>
.radio{
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}
label{
    font-weight: 600;
}
input[type="radio"]{
	margin-right: 0.50rem;
    height: 1.5rem;
    width: 1.5rem;
}
</style>