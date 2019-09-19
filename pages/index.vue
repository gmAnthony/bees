<template>
  <div class="grid-container">
    <div class="logo">
      <Logo />
    </div>
    <Navbar />
    <div class="content" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

export default {
  components: {
    Navbar,
    Logo
  }
}
</script>

<style />
