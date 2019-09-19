<template>
  <div class="nav" role="navigation">
    <b-nav vertical class="w-25">
      <i @click="expanded=key">&nbsp;</i>
      <b-nav-item v-b-toggle="'collapse-2' + key" active class="m-1" visible="key === expanded">
        Mass
      </b-nav-item>
      <b-collapse id="collapse-2">
        <b-nav vertical class="w-25">
          <b-nav-item>Bees</b-nav-item>
          <b-nav-item>Bees2</b-nav-item>
          <b-nav-item>Bees3</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-3>
        Length
      </b-nav-item>
      <b-collapse id="collapse-3">
        <b-nav vertical class="w-25">
          <b-nav-item>Bees</b-nav-item>
          <b-nav-item>Bees2</b-nav-item>
          <b-nav-item>Bees3</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-4>
        Volume
      </b-nav-item>
      <b-collapse id="collapse-4">
        <b-nav vertical class="w-25">
          <b-nav-item>Bees</b-nav-item>
          <b-nav-item>Bees2</b-nav-item>
          <b-nav-item>Bees3</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-5>
        Time
      </b-nav-item>
      <b-collapse id="collapse-5">
        <b-nav vertical class="w-25">
          <b-nav-item>Bees</b-nav-item>
          <b-nav-item>Bees2</b-nav-item>
          <b-nav-item>Bees3</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-6>
        Velocity
      </b-nav-item>
      <b-collapse id="collapse-6">
        <b-nav vertical class="w-25">
          <b-nav-item>Bees</b-nav-item>
          <b-nav-item>Bees2</b-nav-item>
          <b-nav-item>Bees3</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expanded: 0
    }
  }
}
</script>

<style />
