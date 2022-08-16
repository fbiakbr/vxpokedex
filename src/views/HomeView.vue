<template>
  <div class="row">
    <div class="col">
      <div class="container text-center">
        <h1>VxPokedex</h1>
        <p>
          A Vue.js application that displays a list of Pokemon from the 
          { <a href="https://pokeapi.co/">PokéAPI</a> }
        </p>
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
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-decoration: none;
  color: #FEDB39;
}
</style>
