
import firebase from 'firebase';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokens: 0,
    userID: '',
    pokemons: [],
    pokemonAll: []
  },
  mutations:{
    SET_TOKENS(state){
      db.collection('users').doc(state.userID).get().then((resp)=>{
        state.tokens = resp.data().userTokens
      })
    },
    GET_POKEMONS(state){
      state.pokemons = []
      db.collection('users').doc(state.userID).get().then((resp)=>{
        resp.data().userPokemons.forEach(pokemon=>{
          state.pokemons.push(pokemon)
        })
      })
    },
    CREATE_USER(state, payload){
      return db.collection('users').doc(payload.uid).set({
        userId: payload.uid,
        userName: payload.username,
        userPokemons: [],
        userTokens: 200
      })
    },
    BUY_POKEMON(state, payload){
      db.collection('users').doc(state.userID).update({
        userPokemons: firebase.firestore.FieldValue.arrayUnion(payload.name),
        userTokens: state.tokens-payload.price
      })
    },
    CLICK_TOKEN(state){
      db.collection('users').doc(state.userID).update({
        userTokens: state.tokens+2
      })
      state.tokens += 2; 
    }
  }
})

const firebaseConfig = {
    apiKey: "AIzaSyCAqDlxukNeIXoqU7NyXNHbw2JDRM8K1mI",
    authDomain: "vue-pokemon-app.firebaseapp.com",
    projectId: "vue-pokemon-app",
    storageBucket: "vue-pokemon-app.appspot.com",
    messagingSenderId: "652766017173",
    appId: "1:652766017173:web:b7bfffc440b7bae27a8d9c"
  };

firebase.initializeApp(firebaseConfig);


// Takes DB
var db = firebase.firestore();

export const userData = {
    data: {
        tokens: 0,
        currentUser : '',
        typeFilterJS: ['chu'],
        usersPokemons: []
    },
    methods: {
        createUser(name, uid){
            return db.collection('users').doc(uid).set({
              userId: uid,
              userName: name,
              userTokens: 200
            })
          },
        addPokemon(uid, pokeName, price){
            db.collection('users').doc(uid).update({
            userPokemons: firebase.firestore.FieldValue.arrayUnion(pokeName),
            userTokens: userData.data.tokens-price
          })
          userData.data.tokens = userData.data.tokens-price;
          userData.methods.getUsersPokemons(userData.data.currentUser);
      }
    }
};




