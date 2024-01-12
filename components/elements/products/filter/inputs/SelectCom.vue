<template>
	<div>
        <label for="">{{ label }}</label>
        <select name="" id="" v-model="selectValue"><option :value="option" v-for="option in options">{{option}}</option></select>
	</div>
</template>
<script setup>
const props = defineProps({
	label:{
		default:'',
		type:String
	},
    options:{
        default:[],
        type:Array
    }
})
const emits = defineEmits(["sendData"])
const selectValue = ref("50 KM")
emits("sendData", selectValue.value)
watch(selectValue, async(newData, oldData)=>{
	if(newData != oldData){
		emits("sendData", selectValue.value)
	}
})
</script>
<style lang="scss" scoped>
		select{
			margin-top: 0.5rem;
			padding: 0.50rem;
			border-radius: 0.5rem;
			width:100%;
			background-color: white;
			border: 1px solid gray;
			font-size: 1.10rem;
			font-weight: 600;
            margin-bottom: 1rem;
		}
    	label{
			font-size: 1.25rem;
			font-weight: 600;
            display: block;
		}
</style>