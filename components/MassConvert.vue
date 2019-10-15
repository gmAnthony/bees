<template>
  <div class="sub-grid">
    <div class="enter">
      <h3> Enter a value to convert </h3>
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
    </div>
    <div class="result">
      <h3> Select a unit to convert to </h3>
      <h5>{{ unitConvert }}</h5>
      <b-form-select v-model="convUnit" :options="convMassOptions" class="unitSelect" />
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

.sub-grid {
  display: grid;
  grid-template-areas:
  "e r"
  "f f";
  grid-template-rows: .2fr .7fr;
  grid-template-columns: .5fr .5fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
}

.enter {
  grid-area: e;
}

.unitEnter {
  width: 75%;
  min-width: 50%;
}

.unitSelect {
  width: 75%;
  min-width: 50%;
}

.result {
  grid-area: r;
}

.fact {
  grid-area: f;
}

@media (max-width: 768px) {
  h4 {
    font-size: 16px;
  }

  h3 {
    font-size: 14px;
  }

  input, select {
    font-size: 12px;
  }

}

</style>
