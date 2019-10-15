<template>
  <div class="grid-container">
    <div class="logo">
      <Logo />
    </div>
    <Navbar />
    <div class="content">
      <div class="sub-grid">
        <Convert />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import Convert from '../components/Convert'

const convert = require('convert-units')

export default {
  components: {
    Navbar,
    Logo,
    Convert
  },
  data () {
    return {
      unit: 'Bees',
      selected: 'lb',
      options: [
        { value: 'lb', text: 'Pounds' },
        { value: 't', text: 'Tons' },
        { value: 'oz', text: 'Ounces' },
        { value: 'mcg', text: 'Micrograms' },
        { value: 'mg', text: 'Milligrams' },
        { value: 'g', text: 'Grams' },
        { value: 'kg', text: 'Kilograms' },
        { value: 'mt', text: 'Metric Tons' }
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
