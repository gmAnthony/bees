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
    font-size: 50%;
  }
}

@media only screen and (min-width: 360px and max-width: 768px) {
  h3 {
    font-size: 50%;
  }
  h4 {
    font-size: 60%;
  }
  p {
    font-size: 50%;
  }
  .enter {
    flex-direction: column;
  }
}

.grid-container {
  display: grid;
  grid-template-areas:
  "l e n"
  "c c c";
  grid-template-rows: 100px 1fr;
  grid-template-columns: 150px 1fr 150px;
  grid-gap: 0.5rem;
  height: 100vh;
}

.logo {
  grid-area: l;
}

.nav {
  grid-area: n;
  padding: 1em;
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
