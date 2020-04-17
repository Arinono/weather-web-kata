<template>
  <div>
    <landscape :season="data.season" />
    <temperature
      :temp="data.temperature"
      :season="data.season"
    />
    <date :date="data.date" />
    <location :location="data.location" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Landscape, Date, Location, Temperature } from '@/components/index'

@Component({
  name: 'WeatherCard',
  components: {
    Landscape, Date, Location, Temperature
  }
})
export default class WeatherCard extends Vue {
  @Prop({ type: Object, required: true }) data!: any
  @Prop({ type: Boolean, default: false }) dark!: any
}
</script>
