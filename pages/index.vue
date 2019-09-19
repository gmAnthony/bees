<template>
  <div class="grid-container">
    <div class="logo">
      <Logo />
    </div>
    <Navbar />
    <div class="content">
      <b-form-input v-model="text" type="number" placeholder="Enter a value." />
      <div class="mt-2">
        Value: {{ text | unit('lb', 'tons', true) }}
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'


export default {
  components: {
    Navbar,
    Logo
  },
  data () {
    return {
      text: ''
    }
  },
  head: {
    script: [
      { type: 'text/javascript', src: 'https://unpkg.com/vue-units@^1.0/vue-units.js', async: true, body: true }
    ]
  }
}
</script>

<style />
