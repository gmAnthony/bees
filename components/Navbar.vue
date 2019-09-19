<template>
  <div class="nav" role="navigation">
    <b-nav vertical class="w-25">
      <i @click="expanded=key">&nbsp;</i>
      <b-nav-item v-b-toggle="'collapse-2' + key" active class="m-1" visible="key === expanded">
        Weight
      </b-nav-item>
      <b-collapse id="collapse-2">
        <b-nav vertical class="w-25">
          <b-nav-item>Bees</b-nav-item>
          <b-nav-item>McDonald's Quarter Pounders</b-nav-item>
          <b-nav-item>Lebron Jameses</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-3>
        Length
      </b-nav-item>
      <b-collapse id="collapse-3">
        <b-nav vertical class="w-25">
          <b-nav-item>Football fields</b-nav-item>
          <b-nav-item>Fruit Roll-ups</b-nav-item>
          <b-nav-item>US Dollar Bills</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-4>
        Volume
      </b-nav-item>
      <b-collapse id="collapse-4">
        <b-nav vertical class="w-25">
          <b-nav-item>Human Mouthfuls</b-nav-item>
          <b-nav-item>Golfballs</b-nav-item>
          <b-nav-item>Large Chicken Eggs</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-5>
        Time
      </b-nav-item>
      <b-collapse id="collapse-5">
        <b-nav vertical class="w-25">
          <b-nav-item>Lifespans of a Mayfly</b-nav-item>
          <b-nav-item>Full Moon Cycles</b-nav-item>
          <b-nav-item>Flaps of a Hummingbird's Wings</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-item v-b-toggle.collapse-6>
        Speed
      </b-nav-item>
      <b-collapse id="collapse-6">
        <b-nav vertical class="w-25">
          <b-nav-item>Airspeed of an Unladen Swallow</b-nav-item>
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
