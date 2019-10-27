<template>
  <div class="convert">
    <div class="enter-result">
      <div class="enter">
        <span> I want to know how many </span>
        <b-form-select v-model="convUnit" :options="convMassOptions" class="unitSelect" />
        <span> are in </span>
        <b-form-input
          v-model="text"
          type="number"
          placeholder="Enter a value"
          class="unitEnter"
          min="0"
          max="10"
          step="3"
        />
        <b-form-select v-model="selected" :options="massOptions" class="unitSelect" />
        <span>.</span>
      </div>
        <span class="result"> There are {{ unitConvert }} {{ convUnit }} in {{ text }} {{ selected }}. </span>
    </div>
    <div class="fact">
      <div v-if="convUnit === 'bees'" class="info">
        <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
          <b-card-text> These are some facts about bees. </b-card-text>
        </b-card>
      </div>
      <div v-if="convUnit === 'qtrPounders'" class="info">
        <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
          <b-card-text> These are some facts about McDonald's Quarter Pounders. </b-card-text>
        </b-card>
      </div>
      <div v-if="convUnit === 'lebrons'" class="info">
        <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
          <b-card-text> These are some facts about Lebron James. </b-card-text>
        </b-card>
      </div>
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
      const conv = convert(this.text)
        .from(this.selected)
        .to(this.convUnit)

      console.log(parseInt(conv))

      if (parseInt(conv).toString().length > 12 && parseInt(conv) < 999999999999999999) {
        return Number(conv).toExponential(12)
      } else if (parseInt(conv) > 999999999999999999) {
        return 'That number is super large you silly goose.'
      } else {
        return parseInt(conv).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      /*
      return convert(this.text)
        .from(this.selected)
        .to(this.convUnit)
        .toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      */
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

::-webkit-input-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

:-ms-input-placeholder {
  color: #fff;
}

.enter span {
  display: inline;
  font-size: 2em;
}

.enter {
  display: inline;
}

.result {
  padding-top: 1em;
  font-size: 2em;
}

.convert {
  width: 100%;
}

.enter-result {
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  align-items: left;
}
.enter {
  grid-area: e;
  padding: 2em;
  margin-left: auto;
}

.result {
  display: flex;
  flex-direction: row;
  grid-area: r;
  padding: 1em;
  margin-right: auto;
}

.fact {
  grid-area: f;
}

.unitEnter {
  display: inline;
  width: 20%;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background: transparent;
  border-radius: 1px;
}

.unitSelect {
  width: 20%;
  overflow: 'scrollParent';
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background: transparent;
  border-radius: 1px;
}

.enter input {
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  background: transparent;
  border-radius: 1px;
}
</style>
