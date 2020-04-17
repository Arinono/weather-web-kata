<template>
  <div class="flex items-center">
    <div class="flex flex-col items-center">
      <img
        :src="icon"
        class="mb-1 w-16 h-16"
      >
      <p class="text-2xl uppercase font-bold">
        {{ season }}
      </p>
    </div>
    <div
      class="h-40 w-6/8 ml-8 mr-2"
      :class="[
        {'bg-white': dark},
        {'bg-black': !dark},
      ]"
    />
    <div class="text-temp text-center">
      {{ temp }}<sup>º</sup>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Temperature'
})
export default class Temperature extends Vue {
  @Prop({ type: Number, required: true }) readonly temp!: number
  @Prop({ type: String, required: true, validator: v => ['winter', 'fall'].includes(v) }) readonly season!: string
  @Prop({ type: Boolean, default: false }) dark!: any

  private get icon (): string {
    return this.season === 'winter' ? `/img/snowflake${this.dark ? '_white' : ''}.png` : `/img/snowflake${this.dark ? '_white' : ''}.png`
  }
}
</script>
