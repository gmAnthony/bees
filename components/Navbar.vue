<template>
  <div class="nav" role="navigation">
    <mdb-navbar
      color="amber"
      class="mt-2 lighten-4"
      expand="xl"
      togglerIcon=""
      animated
      animation="1"
    >
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item waves-fixed>
            <nuxt-link to="/mass">
              Mass
            </nuxt-link>
          </mdb-nav-item>
          <mdb-nav-item waves-fixed>
            <nuxt-link to="/distance">
              Distance
            </nuxt-link>
          </mdb-nav-item>
          <mdb-nav-item waves-fixed>
            <nuxt-link to="/volume">
              Volume
            </nuxt-link>
          </mdb-nav-item>
          <mdb-nav-item waves-fixed>
            <nuxt-link to="/time">
              Time
            </nuxt-link>
          </mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler } from 'mdbvue'

export default {
  name: 'HamburgerMenuPage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler
  }
}
</script>

<style>
.nav {
  line-height: 2em;
}
.mt-2 {
  z-index: 1;
}
</style>
