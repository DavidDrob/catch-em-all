<template>
  <div class="main">
      <div class="logo">
        <!--<a href="#">-->
          <p class="logo-text">Collect 'em all</p>
          <!--</a>-->
      </div>
      <div class="links">
        <ul>
            <li class="has-text-weight-semibold"><router-link to="/home">Home</router-link></li>
            <li class="has-text-weight-semibold if-not-user-dont-show"><router-link to="/mycards">My Cards</router-link></li>
            <li class="has-text-weight-semibold if-user-dont-show"><router-link to="/register">Register</router-link></li>
            <li class="has-text-weight-semibold if-user-dont-show"><router-link to="/login">Login</router-link></li>
            <li class="has-text-weight-semibold if-not-user-dont-show"><a @click="signOut">Logout</a></li>
          <li><span class="tag is-white if-not-user-dont-show">{{Tokens}}</span></li>
        </ul>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import store from "../store/index.js"


export default {
  name: 'Nav',
  data: function(){
    return{
    }
  },
  methods:{
    signOut(){
      firebase
      .auth().signOut()
      .then(()=>{
        store.state.tokens = 0;
        store.state.pokemons = [];
        store.state.userID = '';
        this.$router.replace('home');
      })
    }
  },
  async mounted(){
    firebase.auth().onAuthStateChanged(user=>{
      if (user){
        store.state.userID = user.uid
        store.commit('SET_TOKENS', store.state.userID)
        store.commit('GET_POKEMONS', store.state.userID)
        document.querySelectorAll('.if-not-user-dont-show').forEach(item => item.style.display = 'block');
        document.querySelectorAll('.if-user-dont-show').forEach(item => item.style.display = 'none');        
      }
      else{
        document.querySelectorAll('.if-not-user-dont-show').forEach(item => item.style.display = 'none');
        document.querySelectorAll('.if-user-dont-show').forEach(item => item.style.display = 'block');
      }
    })
  },
  computed:{
    Tokens: function(){
      return store.state.tokens
    }
  }
}

</script>

<style scoped>
.main{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 0 5vh 0;
}
ul{
  display: flex;
  flex-direction: row;
}
li{
  padding-right: 3vw;
}
li a{
    color: #ffcc01;
}
li:last-child{
  padding-right: 0;
}
.logo{
  width: 15%;
}
.logo-text{
  font-weight: 600;
  font-size: 20px;
}
@media (max-width: 600px) {
   .hamburger{
     display: inline;
   }
}
</style>