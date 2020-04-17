<template>
  <div
    id="app"
    class="flex flex-col md:flex-row max-w-screen min-h-screen bg-grey py-4"
  >
    <div class="flex flex-1 flex-col items-center">
      <h1 class="pb-2">
        Dark
      </h1>
      <weather-card
        :data="dark"
        dark
      />
    </div>
    <div class="flex flex-1 flex-col items-center">
      <h1 class="pb-2">
        Light
      </h1>
      <weather-card
        :data="light"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WeatherCard from '@/components/WeatherCard.vue'

@Component({
  components: {
    WeatherCard
  }
})
export default class App extends Vue {
  private dark = {
    temperature: 1,
    date: 'Monday, 21 nov 2142',
    location: 'Amsterdam, Netherlands',
    season: 'winter'
  }

  private light = {
    temperature: 5,
    date: 'Monday, 31 oct 2048',
    location: 'Amsterdam, Netherlands',
    season: 'fall'
  }
}
</script>

<style lang="scss">
@import url('//fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-family: 'Nothing You Could Do', cursive;
}
</style>
