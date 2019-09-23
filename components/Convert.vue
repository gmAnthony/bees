<template>
  <div>
    <div class="enterUnit">
      <b-form-input v-model="text" type="number" placeholder="Enter a value." class="unitEnter" />
      <b-form-select v-if="mass" v-model="selected" :options="massOptions" class="unitSelect" />
      <b-form-select v-model="selected" :options="lengthOptions" class="unitSelect" />
      <b-form-select v-model="selected" :options="volumeOptions" class="unitSelect" />
      <b-form-select v-model="selected" :options="timeOptions" class="unitSelect" />
      <b-form-select v-model="selected" :options="speedOptions" class="unitSelect" />
    </div>
    <div class="mt-2">
      {{ unit }}: {{ unitConvert }}
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
      unit: 'bees',
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
      lengthOptions: [
        { value: 'mm', text: 'Millimeters' },
        { value: 'cm', text: 'Centimeters' },
        { value: 'm', text: 'Meters' },
        { value: 'km', text: 'Kilometers' },
        { value: 'in', text: 'Inches' },
        { value: 'yd', text: 'Yards' },
        { value: 'ft', text: 'Feet' },
        { value: 'mi', text: 'Miles' }
      ],
      volumeOptions: [
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
      timeOptions: [
        { value: 'ns', text: 'Nanoseconds' },
        { value: 'mu', text: 'Microseconds' },
        { value: 'ms', text: 'Milliseconds' },
        { value: 's', text: 'Seconds' },
        { value: 'min', text: 'Minutes' },
        { value: 'h', text: 'Hours' },
        { value: 'd', text: 'Days' },
        { value: 'week', text: 'Weeks' },
        { value: 'year', text: 'Years' }
      ],
      speedOptions: [
        { value: 'm/s', text: 'Meters Per Second' },
        { value: 'km/h', text: 'Kilometers Per Hour' },
        { value: 'm/h', text: 'Miles Per Hour' },
        { value: 'knot', text: 'Knots' },
        { value: 'ft/s', text: 'Feet Per Second' }
      ]
    }
  },
  computed: {
    unitConvert () {
      return convert(this.text)
        .from(this.selected)
        .to(this.unit)
        .toFixed(0)
    },
    mass () {
      return this.$route.path === '/mass'
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
  width: 50%;
}

.unitSelect {
  width: 20%;
}

.enterUnit {
  display: flex;
  margin-top: 20%;
}
</style>
