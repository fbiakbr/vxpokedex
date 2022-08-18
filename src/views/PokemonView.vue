<template>
  <div class="row">
    <div class="col-md-12">
      <div class="container">
        <template v-if="pokemons.length > 0">
        <PokemonCard
          v-for="(pokemon, index) in pokemons"
          :pokemonName="pokemon.name"
          :pokemonImage="pokemon.sprites.other['official-artwork']"
          :pokemonType="types[0].type.name"
          :key="pokemon.name"
        />
        </template>
      </div>
      <Paginator :page="1" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokemonCard from "../components/PokemonCard.vue";
import Paginator from "../components/Paginator.vue";
import axios from "axios";

export default defineComponent({
  setup() {
    return {};
  },
  components: { Paginator, PokemonCard },
  methods: {
    async getPokemon(pokemonId: Number) {
      const result = axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + pokemonId
      );
      return result;
    },
    async getPagePokemons() {
      for (let i = this.page; i <= this.page * this.pokemonsPerPage; i++) {
        await this.getPokemon(i).then((res) => {
          this.pokemons.push(res.data);
        });
      }
      console.log(this.pokemons);
    },
  },
  data() {
    return {
      pokemons: [],
      pokemonsPerPage: 10,
      page: 1,
    };
  },
  mounted() {
    this.getPagePokemons();
  },
});
</script>

<style scoped></style>
