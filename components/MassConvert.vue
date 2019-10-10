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
      <div class="facts">
        <b-card border-variant="primary" header="Facts & Notes" header-bg-variant="primary" header-text-variant="white" align="center">
          <b-card-text> These are some facts about bees. </b-card-text>
        </b-card>
        <b-card border-variant="primary" header="Confidence" header-bg-variant="primary" header-text-variant="white" align="center">
          <vue-plotly :data="data" :layout="layout" :options="options" class="plot" />
        </b-card>

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
      <div class="confidence">
        <b-button v-b-toggle.collapse-2 variant="primary">
          Confidence
        </b-button>
        <b-collapse id="collapse-2" class="mt-5">
          <b-card>
            <vue-plotly :data="data" :layout="layout" :options="options" class="plot" />
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import VuePlotly from '@statnett/vue-plotly'

const trace1 = {
  type: 'scatter',
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'lines',
  name: 'Red',
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
}
const convert = require('convert-units')
export default {
  components: {
    VuePlotly
  },
  data () {
    return {
      data: [trace1],
      layout: {},
      options: {
        responsive: true,
        autosizable: true
      },
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

.mt-5 {
  height: 10em;
  max-width: 100%;
}

.svg-container {
  width: 100%;
}

.unitSelect {
  width: 100%;
}

.info, .confidence {
  padding: 1.2em;
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
