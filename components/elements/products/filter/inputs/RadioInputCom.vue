<template>
	<div class="radio" v-for="label in labels">
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
	labels:{
		default:[],
		type:Array
	},
})
const emits = defineEmits(['sendInput'])
const inputValue = ref("Model S")
emits("sendInput", inputValue.value)
watch( inputValue, async(newValue, oldValue)=>{
    if(oldValue != newValue){
        emits("sendInput", inputValue.value)
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