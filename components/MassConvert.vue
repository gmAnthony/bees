<template>
  <div class="convert">
    <div class="enter">
      <div class="col-1">
        <b-form-input
          v-model="text"
          oninput="javascript: if (this.value.length > this maxLength) this.value = this.value.slice(0, this.maxLength);"
          type="number"
          placeholder="Enter a number to convert"
          class="unitEnter"
          maxlength="10"
          min="0"
          max="10"
          step="3"
        />
        <b-form-select v-model="selected" :options="massOptions" class="unitSelect" />
      </div>
      <div class="col-2">
        <span>{{ unitConvert }}</span>
        <b-form-select v-model="convUnit" :options="convMassOptions" class="unitSelect" />
      </div>
    </div>
    <div class="fact">
      <div v-if="convUnit === 'bees'" class="info">
        <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
          <b-card-text> Researchers from the University of California-Davis <a href src="https://www.ucdavis.edu/news/entomologists-engineers-work-together-weigh-bee">developed a system to weigh bees</a> as a part of their research to better understand bee health. They found that the average yellow-faced bumblebee (<em>Bombus vosnesenskii</em>) weighs 150-200 milligrams. This process was no small feat and it took a collaboration of engineers and entomologists to accurately weigh each tiny, jittery bee. </b-card-text>
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
      selected: 'kg',
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

.enter {
  display: flex;
  word-break: break-word;
  justify-content: center;
}

.col-1, .col-2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.col-1 {
  padding-right: 10%;
  min-width: 50%;
  align-items:flex-start;
}

.col-2 {
  padding-left: 10%;
  min-width: 50%;
}

.col-1 input {
  margin: 0;
}

.col-2 span {
  font-size: 1.2em;
  padding-left: 1.2em;
}

.enter input {
  width: 100%;
  margin-bottom: .5em;
}

.unitSelect {
  width: 100%;
  word-break: break-word;
  margin: 0;
}

.info {
  padding-top: 2em;
}

.card {
  border: 0px;
}

.card-header {
  background-color: #fff !important;
  font-weight: 800;
}

.card-text {
  text-align: left;
}

@media only screen and (max-width:768px) {
  h3 {
    font-size: 50%;
  }
  .enter {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .col-1 {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 1em;
  }
  .col-2 {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 1em;
  }
}
</style>
