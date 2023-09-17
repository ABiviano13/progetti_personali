<script>
import Header from "../components/portfolio/HeaderApp.vue";
import Footer from "../components/portfolio/FooterApp.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
   
    }
  }
}
</script>

<template>
  <body>
    <Header></Header>
    <main>
      <slot />
    </main>
    <Footer></Footer>
  </body>
</template>

<style lang="scss">
body {
  background-color: rgb(116, 169, 163);
}
</style>
