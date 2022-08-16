<template>
  <div class="row">
    <div class="col-md-12">
      <div class="container">
        <h1>VxPokedex</h1>
        <p>
          A Vue.js application that displays a list of Pokemon from the {
          <a href="https://pokeapi.co/">PokéAPI</a> } <br />
          Made with ❤️ by
          <a href="https://github.com/fbiakbr" target="_blank"
            >Febiadi Wisnu Akbar</a
          >
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
  color: #fedb39;
}
</style>
