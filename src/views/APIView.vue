<template>
  <div class="row">
    <div class="col">
      <div class="container text-center">
        <img src="../assets/pokeapi.png" alt="PokeAPI" />
        <h3 class="mt-4">The RESTful Pokémon API</h3>
        <p>Serving over 250,000,000 API calls each month!</p>
        <a href="https://pokeapi.co" target="_blank" class="btn btn-warning">Go to Website</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container a {
    color: #293462;
    font-weight: 600;
}
</style>
