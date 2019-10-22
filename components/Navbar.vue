<template>
  <div class="nav" role="navigation">
    <b-nav class="w-25">
      <b-nav-item>
        <nuxt-link to="/mass">
          Mass
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/distance">
          Distance
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/volume">
          Volume
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/time">
          Time
        </nuxt-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.w-25 {
  min-width: 100%;
}
</style>
