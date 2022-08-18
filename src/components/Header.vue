<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">VxPokedex</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link" href="/home">Home</a>
          <a class="nav-link" href="/pokemon">Pokemon</a>
          <a class="nav-link" href="/about">About</a>
          <a class="nav-link" href="/api">API</a>
        </div>
      </div>
    </div>
  </nav>
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
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #293462;
}
.navbar-brand:hover {
  color: #293462;
}
.navbar-nav a {
  color: #293462;
}
.navbar-nav a:hover {
  color: #293462;
}
</style>
