<template>
  <div>
    <div>
      <img :src="icon">
      <p>{{ season }}</p>
    </div>
    <div />
    <div>{{ temp }}<sup>º</sup></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Temperature'
})
export default class Temperature extends Vue {
  @Prop({ type: Number, required: true }) readonly temp!: number
  @Prop({ type: String, required: true, validator: v => ['winter'].includes(v) }) readonly season!: string

  private get icon (): string {
    return this.season === 'winter' ? '/img/snowflake.png' : '/img/snowflake.png'
  }
}
</script>
