<template>
  <img :src="img">
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Landscape'
})
export default class Landscape extends Vue {
  @Prop({ type: String, default: 'fall', validator: v => ['fall', 'winter'].includes(v) }) readonly season!: string

  private get img (): string {
    return this.season === 'fall' ? '/img/illustration_1.jpg' : this.season === 'winter' ? '/img/illustration_2.jpg' : '/img/illustration_1.jpg'
  }
}
</script>
