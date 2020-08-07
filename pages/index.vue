<template>
  <div class="grid-container">
    <div class="header">
      <div class="logo">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </div>
      <div class="nav-bar">
        <Navbar />
      </div>
    </div>
    <div class="content">
      <div class="sub-grid">
        <h1>Hello, welcome to How Many Bees.</h1>
        <p>This project was created for the very important purpose of converting ordinary units of measurement to units which are a bit more... esoteric. The idea began when a <a href src="https://jcode.me/how-much-does-a-bee-weigh/">bot was created</a> on the website <a href src="https://www.reddit.com">Reddit</a> which converted kilograms to the equivalent number of bees whenever someone used that number in a comment. I love the idea of parsing the world into silly units like bees, lifespans of a mayfly, and Everests. So, I created this silly unit converter in order for people to have a bit of fun when deciding which unit to report something in, but also just as a personal exercise in web development. I hope you find the unit conversions as useful and fun as they possibly can be. Feel free to give me feedback.</p>
        <div class="mb-2">
          <b-avatar src="https://pbs.twimg.com/profile_images/764538543448297473/LXTX0WHO_200x200.jpg" size="6rem" />
          <a href="mailto:gm.anthony@gmail.com">Email</a>
          <a href="https://twitter.com/anth_gm">Twitter</a>
        </div>
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
  }
}
</script>

<style />
