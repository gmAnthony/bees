<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script>
export default {
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap' }
  ]
}
</script>

<style>
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
  "l c"
  "n c"
  "n c";
  grid-template-rows: 100px 1fr;
  grid-template-columns: 150px 1fr;
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
</style>
