<script>
import Header from '../components/portfolio/HeaderApp.vue'
import Footer from '../components/portfolio/FooterApp.vue'


export default {
  components: {
    Header,
    Footer,
  }
}

</script>

<template>

  <Header></Header>
  <main>
    <slot />
    
  </main>
  <Footer></Footer>

</template>