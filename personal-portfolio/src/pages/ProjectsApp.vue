<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: "HomeApp",
  components: {
    LayoutDefault,
  },
  data() {
    return {
      images: [
        "spotify.png",
        "digital_comics.png",
        "whatsapp.png",
        "discord.png",
        "dropbox.png",
        "dashboard.png",
      ],
    };
  },
};
</script>

<template>
  <LayoutDefault>
    <div class="container">
      <!-- <div class="box" v-for="image in images">
                <img :src="image" alt="">
            </div> -->
    </div>
  </LayoutDefault>
</template>

<style lang="scss" scoped>
.container {
  padding: 50px;
  display: grid;
  grid-template-columns: 50% 0;
  gap: 20px;

  .box {
    width: 500px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 20px;
  }
}
</style>
