<template>
  <div>
    <div class="enterUnit">
      <h3> Enter a value to convert </h3>
      <b-form-input v-model="text" type="number" placeholder="Enter a value." class="unitEnter" />
      <b-form-select v-model="selected" :options="massOptions" class="unitSelect" />
    </div>
    <div class="resultUnit">
      <h3> Select a unit to convert to </h3>
      <h4>{{ unitConvert }}</h4>
      <b-form-select v-model="convUnit" :options="convMassOptions" class="unitSelect" />
    </div>
  </div>
</template>

<script>
const convert = require('convert-units')
export default {
  data () {
    return {
      text: '',
      selected: 'lb',
      convUnit: 'bees',
      massOptions: [
        { value: 'lb', text: 'Pounds' },
        { value: 't', text: 'Tons' },
        { value: 'oz', text: 'Ounces' },
        { value: 'mcg', text: 'Micrograms' },
        { value: 'mg', text: 'Milligrams' },
        { value: 'g', text: 'Grams' },
        { value: 'kg', text: 'Kilograms' },
        { value: 'mt', text: 'Metric Tons' }
      ],
      convMassOptions: [
        { value: 'bees', text: 'Bees' },
        { value: 'qtrPounders', text: "McDonald's Quarter Pounders" },
        { value: 'lebrons', text: 'Lebron Jameses' }
      ]
    }
  },
  computed: {
    unitConvert () {
      return convert(this.text)
        .from(this.selected)
        .to(this.convUnit)
        .toFixed(0)
    }
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.unitEnter {
  width: 20%;
}

.mt-2 {
  display: flex;
  flex-direction:row;
}

.unitSelect {
  width: 20%;
}

.enterUnit, .resultUnit {
  display: flex;
  margin-top: 5%;
  align-items: center;
  flex-direction:column;
}
</style>
