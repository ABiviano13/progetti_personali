<script>
import Header from "../components/portfolio/HeaderApp.vue";
import Footer from "../components/portfolio/FooterApp.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <body>
    <Header></Header>
    <main>
      <slot />

      <div class="triangle left">A</div>
      <div class="triangle right">A</div>
    </main>
  </body>
</template>

<style lang="scss">
body {
  background-color: rgb(116, 169, 163);
  color: rgb(226, 220, 220);
  position: relative;
  height: 100vh;
  overflow: hidden;

  .triangle {
    font-family: "Major Mono Display", monospace;
    font-size: 100px;

    position: absolute;
    bottom: 5%;

  }

  .left {
    left: 30px;
    transform: rotate(35deg);
  }

  .right {
    right: 30px;
    transform: rotate(-35deg);
  }
}
</style>
