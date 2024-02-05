<template>
	<div class="filter">
		<ElementsProductsFilterInputsTextInputCom @sendTextInput="getTextInput" label="Postnummer" subLabel="Hvor"></ElementsProductsFilterInputsTextInputCom>
		<p v-if="validPostCode == false && textData != ''" class="errorText">Skal være et gyldig postnummer i danmark</p>
		<ElementsProductsFilterInputsSelectCom @sendData="getSelect" :options="selectOptions" label="Søg inden for antal Km"></ElementsProductsFilterInputsSelectCom>
		<div class="saveLoaction" @click="isPostCode = true">Søg</div>
		<div class="filterTitle">
			<p>Modeller</p>
			<ElementsProductsFilterInputsRadioInputCom @sendInput="getRadio" :labels="['Model S', 'Model Y', 'Model X']" radioType="model"></ElementsProductsFilterInputsRadioInputCom>
		</div>
		<div class="filterTitle">
			<p>Udstyr</p>
			<ElementsProductsFilterInputsCheckBoxInputCom @sendInput="getCheckBox" :labels="['Performance firehjulstræk','Long Range firehjulstræk']"></ElementsProductsFilterInputsCheckBoxInputCom>
		</div>
	</div>
</template>
<script setup>
import { useStore } from '~/store/glStore'
import postCodes from '~/data/postCode';
	const props = defineProps({
	})
	const selectOptions = ref([
		"50",
		"100",
		"150",
		"200",
	])
	const store = useStore()
	const selectData = ref("")
	const textData = ref("")
	const radioData = ref("")
	const checkBoxData = ref([])
	const isPostCode = ref(false)
	const validPostCode = ref(false)
	function makeFilter(){
		let tempArray = []
		if(checkBoxData.value != []){
		for(let checkBox of checkBoxData.value){
			tempArray.push(checkBox.toString())
		}
		tempArray.push(radioData.value)
		}
		store.setFilter(tempArray)
	}
	function getRadio(data){
		radioData.value = data
	}
	function getCheckBox(data){
		checkBoxData.value = data
	}
	function getTextInput(data){
		textData.value = data
	}
	function getSelect(data){
		selectData.value = data
	}
	watch(textData, async (newData)=>{
		if(postCodes.includes(newData)){
			validPostCode.value = true
		}else{
			validPostCode.value = false
		}
	})
	watch(isPostCode, async (newData) =>{
		if(newData == true && validPostCode.value == true){
			store.setfilterZip(textData.value)
			store.setSearchArea(selectData.value)
		}
		isPostCode.value = false
	})
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
	.saveLoaction{
		padding: 0.75rem;
		background-color: hsl(0, 0%, 90%);
		font-size: 1.2rem;
		font-weight: bold;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
		cursor: pointer;
	}
	.errorText{
		color: red;
		margin-bottom: 1rem;
	}
</style>