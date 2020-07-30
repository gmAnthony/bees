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
  font-size: 80%;
  line-height: 1.4;
}

@media only screen and (max-width:360px) {
  h3 {
    font-size: 0.8em;
  }

}

@media only screen and (min-width: 360px and max-width: 768px) {
  h3 {
    font-size: 1.1em;
  }
  h4 {
    font-size: 0.9em;
  }
  p {
    font-size: 0.7em;
  }
}

.grid-container {
  display: grid;
  grid-template-areas:
  "l n"
  "c c";
  grid-template-rows: 100px 1fr;
  grid-template-columns: 100px 1fr;
  grid-gap: 0.5rem;
  height: 100vh;
  margin: 0;
}

.logo {
  grid-area: l;
  margin: 0;
  padding: 0;
}

.nav {
  grid-area: n;
  padding: 1.2em;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.empty {
  grid-area: x;
}

.content {
  grid-area: c;
  padding: 1.2em;
  margin: 0;
  padding: 0;
}
</style>
