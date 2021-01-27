<template>
  <div class="modal-bg">
      <div class="main">
            <img src="../assets/me.jpg" class="myPhoto" alt="photo">
            <p class="is-title is-size-3 title">David Drobnak</p>
            <div class="main-text">
                <p>Hey! I am David (the handsome dude on the photo) and I am the creator of this Web App.
                I made this project using Vue.JS, HTML, CSS, BulmaCSS and Firebase. I made it to dive more into Vue, learn Vue-Router, Vuex and play a bit with the back-end.
                </p>
            </div>
            <a href="https://github.com/DavidDrob/"><img class="contact" src="../assets/github.svg" alt="github icon"></a>
          <p class="is-title has-text-weight-bold exit" @click="closePopup">X</p>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        closePopup() {
            this.$router.replace('home');
        }
    }
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
.main{
    position: relative;
    background: white;
    color: #363636;
    width: 35vw;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 3px 10px 20px;
}
.exit{
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
}
.main-normal{
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}
.main-text{
    width: 30vw;
}
.myPhoto{
    box-shadow: 3px 10px 35px;
    max-height: 200px;
    border-radius: 50%;
    margin-bottom: 50px;
    position: absolute;
    top: -10vh;
}
.title{
    z-index: 1;
    margin-top: 8vh;
    color: #363636;
}
.contact{
    padding-top: 2vh;
}

@media (max-width: 1440px) {
    .main{
        height: 45vh;
    }
    .title{
        margin-top: 12vh;
    }
}

@media (max-width: 600px) {
    .myPhoto{
        max-height: 150px;
        top: -5vh;
    }
    .main{
        width: 60vw;
        height: 60vh;
    }
}
</style>