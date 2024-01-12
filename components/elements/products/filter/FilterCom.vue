<template>
	<div class="filter">
		<ElementsProductsFilterInputsTextInputCom label="Postnummer" subLabel="Hvor"></ElementsProductsFilterInputsTextInputCom>
		<ElementsProductsFilterInputsSelectCom @sendData="getSelect" :options="selectOptions" label="Søg inden for"></ElementsProductsFilterInputsSelectCom>
		<div class="filterTitle">
			<p>Modeller</p>
			<ElementsProductsFilterInputsRadioInputCom @sendInput="getRadio" :labels="['Model S', 'Model Y']" radioType="model"></ElementsProductsFilterInputsRadioInputCom>
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
	const selectData = ref("")
	const radioData = ref("")
	const checkBoxData = ref([])
	
	function makeFilter(){
		let tempArray = []
		if(checkBoxData.value != []){
		for(let checkBox of checkBoxData.value){
			tempArray.push(checkBox.toString())
		}
		}
		store.setFilter(tempArray)
	}
	function getRadio(data){
		radioData.value = data
	}
	function getCheckBox(data){
		checkBoxData.value = data
	}
	function getSelect(data){
		selectData.value = data
	}
	watch([radioData, checkBoxData, selectData ], ([newRadio, newCheckbox, newIndenFor], [oldRadio, oldCheckbox, oldIndenFor])=>{
		if(newRadio != oldRadio || newCheckbox != oldCheckbox || newIndenFor != oldIndenFor){
			makeFilter()
			store.setModel(radioData.value)
			store.setindenFor(selectData.value)
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