<template>
  <div class="conv-wrapper">
    <div class="convert">
      <div class="enterUnit">
        <h3> Enter a value to convert </h3>
        <b-form-input v-model="text" type="number" placeholder="Enter a value" class="unitEnter" />
        <b-form-select v-model="selected" :options="massOptions" class="unitSelect" />
      </div>
      <div class="resultUnit">
        <h3> Select a unit to convert to </h3>
        <h4>{{ unitConvert }}</h4>
        <b-form-select v-model="convUnit" :options="convMassOptions" class="unitSelect" />
      </div>
    </div>
    <div v-if="convUnit === 'bees'" class="info">
      <b-button v-b-toggle.collapse-1 variant="primary">
        Facts & Notes
      </b-button>
      <b-collapse id="collapse-1" class="mt-4">
        <b-card>
          <p class="card-text">
            These are some facts about bees
          </p>
        </b-card>
      </b-collapse>
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
        .toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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

.convert {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
}

.unitEnter {
  width: 100%;
}

.mt-2 {
  display: flex;
  flex-direction:row;
}

.unitSelect {
  width: 100%;
}

.enterUnit, .resultUnit {
  display: flex;
  margin-top: 5%;
  align-items: center;
  flex-direction:column;
  padding-left: 10em;
  padding-right: 10em;
}
</style>
