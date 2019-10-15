<template>
  <div class="conv-wrapper">
    <div class="convert">
      <div class="enterUnit">
        <h3> Enter a value to convert </h3>
        <b-form-input v-model="text" type="number" placeholder="Enter a value" class="unitEnter" />
        <b-form-select v-model="selected" :options="lengthOptions" class="unitSelect" />
      </div>
      <div class="resultUnit">
        <h3> Select a unit to convert to </h3>
        <h4>{{ unitConvert }}</h4>
        <b-form-select v-model="convUnit" :options="convLengthOptions" class="unitSelect" />
      </div>
    </div>
    <div v-if="convUnit === 'footballField'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about football fields. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'fruitRollup'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about Fruit Roll-Ups. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'microeverests'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about Everest. </b-card-text>
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
      selected: 'ft',
      convUnit: 'footballField',
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
      convLengthOptions: [
        { value: 'footballField', text: 'Football fields' },
        { value: 'fruitRollup', text: 'Fruit Roll-Ups' },
        { value: 'microeverests', text: 'Microeverests' }
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
