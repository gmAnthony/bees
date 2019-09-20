<template>
  <div class="grid-container">
    <div class="logo">
      <Logo />
    </div>
    <Navbar />
    <div class="content">
      <p>Enter a weight in</p>
      <b-form-select v-model="selected" :options="options" />
      <b-form-input v-model="text" type="number" placeholder="Enter a value." />
      <div class="mt-2">
        Bees: {{ unitConvert }}
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

const convert = require('convert-units')

export default {
  components: {
    Navbar,
    Logo
  },
  data () {
    return {
      text: '',
      selected: 'lb',
      options: [
        { value: 'lb', text: 'Pounds' },
        { value: 't', text: 'Tons' }
      ]
    }
  },
  computed: {
    unitConvert () {
      return convert(this.text).from(this.selected).to('bees').toFixed(0)
    }
  }
}
</script>

<style />
