<template>
  <div class="nav" role="navigation">
    <b-nav vertical class="w-25">
      <b-nav-item active class="m-1">
        <nuxt-link to="/mass">
          Weight
        </nuxt-link>
      </b-nav-item>
      <b-nav-item>
        <nuxt-link to="/length">
          Length
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
      <b-nav-item>
        <nuxt-link to="/speed">
          Speed
        </nuxt-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
}
</script>

<style />
