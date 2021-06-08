<template>
  <q-layout view="lHh Lpr lFf" :class="bgClass" :style="`background: ${backgroundColor}`">
    <div v-if="backgroundOverlay" class="bg-overlay"></div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  //====================================================
  name: 'MainLayout',
  //====================================================
  data () {
    return {
    }
  },
  //====================================================
  computed: {
    //==============
    backgroundOverlay() {
      return this.$root.settings.backgroundOverlay;
    },
    //==============
    backgroundColor() {
      return this.$root.settings.backgroundColor;
    },
    //==============
    weatherData() {
      return this.$root.weatherData;
    },
    //==============
    bgClass() {
      if (!this.weatherData) return
      if (!this.weatherData.weather) return

      if (this.weatherData.weather[0].icon.endsWith('n')) {
        return 'bg-night';
      }

      return 'bg-day';
    },
    //==============
  },
  //====================================================
  created() {
    this.$root.$refs.mainLayout = this;
  }
  //====================================================
}
</script>

<style lang="scss">
.bg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at top, #eee, #000);
  opacity: 0.5;
  z-index: 0;
  mix-blend-mode: overlay;
}

.bg-day {

  .bg-overlay {
    opacity: 0.5;
    background: radial-gradient(circle at top, #eee, #000);
  }
}
.bg-night {
  filter: saturate(0.4);

  .bg-overlay {
    opacity: 0.7;
    background: radial-gradient(circle at top, #555, #000);
  }
}
</style>
