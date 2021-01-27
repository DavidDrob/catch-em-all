<template>
  <div id="app">
    <Nav />
    <button class="button" @click="getTokens">Add 2 Tokens</button>
    <Cards />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Cards from "./components/Card.vue"; 
import store from "./store/index.js"
import "./index.css";

export default {
  name: "App",
  components: {
    Nav,
    Cards
  },
  data: function () {
    return {
      pokemonAll: [],
      typeColors: {
        bug: "#729f3f",
        dragon: "#53a4cf",
        fairy: "#fdb9e9",
        fire: "#fd7d24",
        ghost: "#7b62a3",
        ground: "#f7de3f",
        normal: "#a4acaf",
        pyschic: "#f366b9",
        steel: "#9eb7b",
        dark: "#707070",
        electric: "#eed535",
        fighting: "#d56723",
        flying: "#3dc7ef",
        grass: "#9bcc50",
        ice: "#51c4e7",
        poison: "#b97fc9",
        rock: "#a38c21",
        water: "#4592c4",
      },
      types: [
        "bug",
        "dragon",
        "fairy",
        "fire",
        "ghost",
        "ground",
        "normal",
        "pyschic",
        "steel",
        "dark",
        "electric",
        "fighting",
        "flying",
        "grass",
        "ice",
        "poison",
        "rock",
        "water",
      ],
      search: ""
    };
  },
  methods:{
    getTokens(){
      store.commit("CLICK_TOKEN")
      store.commit("SET_TOKENS")
    }
  }
};
</script>

<style scoped>
.button{
  background:#ffcc01;
  border: none;
}
</style>
