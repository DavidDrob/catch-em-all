<template>
  <div id="app">
    <div class="search">
      <p class="title is-4 searchP">Search</p>
      <input
        class="input"
        v-model="search"
        type="text"
        placeholder="search pokemon"
      />
    </div>
    <router-view></router-view>
    <ul>
      <div class="pokemon-cards">
        <li
          class="has-text-danger"
          v-for="(pokemon, index) in filterPokemon"
          :key="pokemon.name + index"
        >
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="pokemon.sprites.front_default"
                  alt="Placeholder image"
                />
              </figure>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-2">{{ pokemon.name }}</p>
                    <p class="subtitle is-6">{{ pokemon.url }}</p>
                  </div>
                </div>
                <div class="content">
                  <div
                    v-bind:style="{
                      backgroundColor: typeColors[type.type.name],
                    }"
                    v-for="(type, index) in pokemon.types"
                    :key="index"
                    class="tag"
                  >
                    {{ type.type.name }}
                  </div>
                  <br />
                  <div class="stats">
                    <p class="title is-4">Stats</p>
                    <p class="title is-6">Height</p>
                    <p class="subtitle is-6 stat">{{ pokemon.height }}</p>
                    <p class="title is-6">Cost</p>
                    <p class="subtitle is-6 stat">
                      {{ pokemon.weight }} Tokens
                    </p>
                    <button class="button" @click="buyPokemon(pokemon.name,pokemon.weight)">
                      Buy this Pokemon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
    <router-link to="/about"
      ><p class="title is-6 about">
        About this project
      </p></router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/index.js"
import "../index.css";

export default {
  name: "App",
  data: function () {
    return {
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
      search: ""
    };
  },
  methods: {
    buyPokemon: function (name,weight) {
      if (store.state.tokens >= weight) {
        store.commit("BUY_POKEMON", {
          name: name,
          price: weight
        })
      }
      else {
        alert("You don't have enough tokens to buy this pokemon.");
      }
      store.commit("SET_TOKENS")
      store.commit("GET_POKEMONS")
    },
  },
  // API Request
  created: function () {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => {
        res.data.results.forEach((pokemon) => {
          axios.get(pokemon.url).then((res) => {
            store.state.pokemonAll.push(res.data);
          });
        });
      });
  },
  // Search / Filter
  computed: {
    filterPokemon: function () {
      return store.state.pokemonAll.filter((pokemon) => {
        return pokemon.name.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
.pokemon-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  width: 15vw;
  margin-right: 30px;
  margin-bottom: 20px;
}

.stat {
  padding: 10px 0px 10px 0px;
}

.tag {
  margin-right: 10px;
  margin-bottom: 10px;
  justify-content: center;
}

.tag:last-child {
  margin-right: 0px;
}

.pokemon-cards:nth-child(3n) {
  flex-basis: 100%;
}

.input {
  width: 20vw;
}

.search {
  margin: 5vh 0vh 10vh 0vh;
}

.searchP {
  color: #ffcc01;
}
.button {
  background-color: #ffcc01;
  font-weight: 600;
}

.about {
  position: fixed;
  bottom: 3vh;
  left: 3vw;
  color: #ffcc01;
}

@media (max-width: 600px) {
   .input{
     width: 40vw;
   }
   .card{
     width: 60vw;
   }
}
</style>
