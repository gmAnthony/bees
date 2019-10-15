<template>
  <div class="conv-wrapper">
    <div class="convert">
      <div class="enterUnit">
        <h3> Enter a value to convert </h3>
        <b-form-input v-model="text" type="number" placeholder="Enter a value" class="unitEnter" />
        <b-form-select v-model="selected" :options="options" class="unitSelect" />
      </div>
      <div class="resultUnit">
        <h3> Select a unit to convert to </h3>
        <h4>{{ unitConvert }}</h4>
        <b-form-select v-model="convUnit" :options="convOptions" class="unitSelect" />
      </div>
    </div>
    <div v-if="convUnit === 'mouth'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about mouthfuls. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'egg'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about chicken eggs. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'golfball'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about golf balls. </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>

const convert = require('convert-units')
export default {
  data () {
    return {
      text: '',
      selected: 'gal',
      convUnit: 'mouth',
      options: [
        { value: 'mm3', text: 'Cubic Millimeters' },
        { value: 'cm3', text: 'Cubic Centimeters' },
        { value: 'ml', text: 'Milliliters' },
        { value: 'l', text: 'Liters' },
        { value: 'tsp', text: 'Teaspoons' },
        { value: 'Tbs', text: 'Tablespoons' },
        { value: 'fl-oz', text: 'Fluid Ounces' },
        { value: 'cup', text: 'Cups' },
        { value: 'pnt', text: 'Pints' },
        { value: 'qt', text: 'Quarts' },
        { value: 'gal', text: 'Gallons' },
        { value: 'ft3', text: 'Cubic Feet' },
        { value: 'yd3', text: 'Cubic Yards' }
      ],
      convOptions: [
        { value: 'mouth', text: 'Mouthfulls' },
        { value: 'egg', text: 'Large Chicken Eggs' },
        { value: 'golfball', text: 'Golf balls' }
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

.info {
  padding-top: 1.2em;
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
