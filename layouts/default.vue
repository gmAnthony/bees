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
  font-size: 100%;
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
/*
.container {
  width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background: rgb(241,241,240);
  background: linear-gradient(0deg, rgba(241,241,240,0.6637744034707158) 0%, rgba(254,252,248,1) 100%);
}

.grid-container {
  display: grid;
  grid-template-areas:
  "l n"
  "c c";
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 80px 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
}

.logo {
  grid-area: l;
  padding: 1.2em;
}

.nav {
  grid-area: n;
  padding: 1.2em;
}

.content {
  grid-area: c;
  padding: 1.2em;
  display: flex;
  flex-direction: column;
}
*/
</style>
