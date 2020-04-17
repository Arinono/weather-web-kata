<template>
  <p>{{ date }}</p>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Date'
})
export default class Date extends Vue {
  @Prop({ type: String, required: true }) readonly date!: string
}
</script>
