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
    <div v-if="convUnit === 'mayfly'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about lifespans of a mayfly. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'moonCycle'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about Moon cycles. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'flaps'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about Hummingbird flaps. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'mooch'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about Anthony Scaramucci. </b-card-text>
      </b-card>
    </div>
    <div v-if="convUnit === 'sols'" class="info">
      <b-card border-variant="light" header="Facts & Notes" header-bg-variant="light" header-text-variant="black" align="center">
        <b-card-text> These are some facts about Martian days. </b-card-text>
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
      selected: 's',
      convUnit: 'mayfly',
      options: [
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
      convOptions: [
        { value: 'mayfly', text: 'Lifespans of a Mayfly' },
        { value: 'moonCycle', text: 'Full moon cycles' },
        { value: 'flaps', text: "Flaps of a hummingbird's wings" },
        { value: 'mooch', text: 'Mooches' },
        { value: 'sols', text: 'Sols' }
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
