<template>
  <div
    class="flex flex-col items-end rounded-lg py-8 px-12"
    :class="[
      {'bg-black': dark},
      {'bg-grey-lighter': !dark}
    ]"
  >
    <landscape
      :season="data.season"
      class="rounded-full border-8 border-solid w-64 h-64 mb-12"
      :class="[
        {'border-grey-darkest': dark},
        {'border-white': !dark},
      ]"
    />
    <temperature
      :class="[
        {'text-black': !dark},
        {'text-white': dark}
      ]"
      class="mb-4"
      :dark="dark"
      :temp="data.temperature"
      :season="data.season"
    />
    <date
      :date="data.date"
      class="mb-4"
      :class="[
        {'text-black': !dark},
        {'text-white': dark}
      ]"
    />
    <location
      :location="data.location"
      :class="[
        {'text-black': !dark},
        {'text-white': dark}
      ]"
    />
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
