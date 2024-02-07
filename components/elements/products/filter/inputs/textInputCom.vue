<template>
	<div>
		<label for="">{{ label }}</label>
		<p>{{ subLabel }}</p>
        <input type="text" v-model="inputValue">
	</div>
</template>
<script setup>
const emits = defineEmits(["sendTextInput"])
const props = defineProps({
	label:{
		default:'',
		type:String
	},
	subLabel:{
		default:'',
		type:String
	}
})
const inputValue = ref("")
watch(inputValue, async (newValue, oldValue)=>{
	if(newValue != oldValue){
		emits("sendTextInput", inputValue.value)
	}
})
</script>
<style lang="scss" scoped>
		input{
			margin-top: 0.5rem;
			padding: 0.50rem;
			border: none;
			outline: none;
			border-radius: 0.5rem;
			width:calc(100% - 1rem);
			font-size: 1.5rem;
			font-size: 1.10rem;
			font-weight: 600;
			margin-bottom: 1rem;
			background-color: hsl(0, 0%, 90%);
		}
		label{
			font-size: 1.25rem;
			font-weight: 600;
		}
</style>