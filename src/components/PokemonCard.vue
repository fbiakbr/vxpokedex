<template>
  <div class="pokemon-card-container" :style="{ background: background }">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        pokemonType: {
            type: String,
        },
    },
  setup() {
    return {};
  },
  computed: {
    background() {
        return "#fff";
    }
  }
});
</script>

<style lang="scss" scoped>
    .pokemon-card-container {
        height: 300px;
        width: 120px;
    }
</style>