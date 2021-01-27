<template>
    <div class="modal-bg">
        <div class="login">
            <div class="login-normal">
                <input type="text" class="input" v-model="email" placeholder="E-Mail">
                <input type="password" class="input" v-model="password" placeholder="Password">
                <button class="button" @click="emailLogin">Login</button>
            </div>
            <p class="is-title has-text-weight-bold" @click="closePopup">X</p>
            <button @click="socialLogin"><img src="../assets/google.png" alt="google logo" class="google"> <p class="is-size-5">Login with Google</p></button>
            <div class="not-a-user">
            <p class="is-size-5">Not registered yet?<router-link to="./register"> Register here</router-link></p>
            </div>
        </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import store from "../store/index.js"

export default {
    name: 'login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        emailLogin(){
            firebase
            .auth().signInWithEmailAndPassword(this.email, this.password)
            .then((result)=>{
                store.state.userID = result.user.uid;
                this.$router.replace('home');
            })
            .catch((err)=>{
                alert(err.message)
            })
        },
        socialLogin(){
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase
            .auth().signInWithPopup(provider)
            .then((result) => {
                store.state.userID = result.user.uid;
                this.$router.replace('home');
            })
            .catch((err)=>{
                alert(err.message)
            })
        },
        closePopup(){
            this.$router.replace('home');
        }
    },
}
</script>

<style scoped>
.modal-bg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.login{
    position: relative;
    background: white;
    width: 30vw;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.is-title{
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    color: #363636;
}
.google{
    width: 30px;
}
button{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 35px 15px 35px;
    border: 2px solid black;
    background: white;
    width: 20vw;
}
.is-size-5{
    padding-left: 15px;
}
.login-normal{
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}
.login-normal input{
    margin-bottom: 15px;
    width: 20vw;
}
.not-a-user{
    margin-top: 30px;
    color: black;
}

@media (max-width: 600px) {
    .login{
        width: 70vw;
        height: 50vh;
    }
    .button, button, .login-normal input{
        width: 50vw;
    }
}
</style>