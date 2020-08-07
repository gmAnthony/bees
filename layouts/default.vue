<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script>
export default {
  link: [
    { rel: 'stylesheet', href: '<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap" rel="stylesheet">' }
  ]
}
</script>

<style>
/* Font adjustments */
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 1.4;
}

.grid-container {
  display: grid;
  grid-template-areas:
  "h h"
  "c c";
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr 1fr;
  /*grid-gap: 0.5rem;*/
  grid-gap: 3rem;
  height: 100vh;
}

.header {
  grid-area: h;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  justify-items: baseline;
}

.logo {
  width: 150px;
}

.nav-bar {
  max-height: 150px;
  align-self:center;
  justify-self:right;
}

.content {
  grid-area: c;
  padding: 1.2em;
  margin: 0;
  padding: 0;
}

.nav {
  flex-direction: row-reverse;
  align-self: center;
}

@media only screen and (max-width:360px) {
  h3 {
    font-size: .9em;
  }
}

@media only screen and (min-width: 360px and max-width: 768px) {
  h3 {
    font-size: .9em;
  }
  h4 {
    font-size: .8em;
  }
  p {
    font-size: .7em;
  }
  .enter {
    flex-direction: column;
  }
}
</style>
