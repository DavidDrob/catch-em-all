<template>
  <div class="my-cards">
    <p class="is-size-5">Your Pokemons ({{Pokemons.length}}/50):</p>
    <ul>
      <li v-for="pokemon in Pokemons" :key="pokemon.index"><p class="is-size-6">{{pokemon}} ,</p></li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index.js"

export default {
  name: "mycards",
  data: function(){
    return{
      
    }
  },
  computed:{
    Pokemons(){
      return store.state.pokemons
    }
  }
}
</script>

<style scoped>
.my-cards{
  color: #ffcc01;
  margin-top: -5vh;
  margin-bottom: 2vh;
}
ul{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>