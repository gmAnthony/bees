<template>
  <div class="grid-container">
    <div class="logo">
      <Logo />
    </div>
    <Navbar />
    <div class="content">
      <MassConvert />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import MassConvert from '../components/MassConvert'

export default {
  components: {
    Navbar,
    Logo,
    MassConvert
  }
}
</script>

<style />
