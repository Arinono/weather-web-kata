<template>
  <p class="text-2xl">
    {{ location }}
  </p>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'Location'
})
export default class Location extends Vue {
  @Prop({ type: String, required: true }) readonly location!: string
}
</script>
