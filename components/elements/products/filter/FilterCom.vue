<template>
	<div class="filter">
		<ElementsProductsFilterInputsTextInputCom label="Postnummer" subLabel="Hvor"></ElementsProductsFilterInputsTextInputCom>
		<ElementsProductsFilterInputsSelectCom :options="selectOptions" label="Søg inden for"></ElementsProductsFilterInputsSelectCom>
		<div class="filterTitle">
			<p>Modeller</p>
			<ElementsProductsFilterInputsRadioInputCom @sendInput="getRadio" label="Model S" radioType="model"></ElementsProductsFilterInputsRadioInputCom>
			<ElementsProductsFilterInputsRadioInputCom @sendInput="getRadio" label="Model Y" radioType="model"></ElementsProductsFilterInputsRadioInputCom>
		</div>
		<div class="filterTitle">
			<p>Udstyr</p>
			<ElementsProductsFilterInputsCheckBoxInputCom @sendInput="getCheckBox" :labels="['Performance firehjulstræk','Long Range firehjulstræk']"></ElementsProductsFilterInputsCheckBoxInputCom>
		</div>
	</div>
</template>
<script setup>
	import { useStore } from '~/store/glStore'
	const props = defineProps({
	})
	const selectOptions = ref([
		"50 KM",
		"100 KM",
		"150 KM",
		"200 KM",
		"alle"
	])
	const store = useStore()
	const radioData = ref("")
	const checkBoxData = ref([])
	function makeFilter(){
		let tempArray = []
		if(checkBoxData.value != []){
		for(let checkBox of checkBoxData.value){
			tempArray.push(checkBox.toString())
		}
		}
		if(radioData.value != ""){
		tempArray.push(radioData.value)
		}
		store.setFilter(tempArray)
		console.log(tempArray) 
	}
	function getRadio(data){
		radioData.value = data
	}
	function getCheckBox(data){
		checkBoxData.value = data
	}
	watch([radioData, checkBoxData], ([newRadio, newCheckbox], [oldRadio, oldCheckbox])=>{
		if(newRadio != oldRadio || newCheckbox != oldCheckbox){
			makeFilter()
		}
	})
</script>
<style lang="scss" scoped>
	.filter{
		padding-bottom: 1rem;
		max-width: 100%;
		.filterTitle{
			margin-bottom: 1rem;
			p{
				font-size: 1.1rem;
				font-weight: 600;
				margin-bottom: 0.5rem;
			}
		}
	}
</style>