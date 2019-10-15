<template>
  <div class="grid-container">
    <div class="logo">
      <Logo />
    </div>
    <Navbar />
    <div class="content">
      <LengthConvert />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import LengthConvert from '../components/LengthConvert'

export default {
  components: {
    Navbar,
    Logo,
    LengthConvert
  }
}
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
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
