<template>
  <div class="P">
    <img src="./IMG/P.svg">
  </div>
  <div class="MS_Profile">
    <div class="Ms_Pic">
      <img src="./IMG/FakePP.png">
      <a>{{store.userInfo.name}}</a>
    </div>
    <div class="MS_info">
      <div class="email-container">
        <div class="email-label"><a>Email</a></div>
        <div class="email-address"><a>{{store.userInfo.Email}}</a></div>
      </div>
      <div class="workplace-container">
        <div class="workplace-label"><a>Workplace</a></div>
        <div class="workplace-address"><a>Coming Soon</a></div>
      </div>
    </div>
  </div>
  <div class="BackMenu">
    <router-link to="/">Main Menu</router-link>
    <img src="./IMG/Arrow%20Right.svg">
  </div>
</template>
<script>
import VueCookies from 'vue-cookies'
import { store } from './store.vue'
import Vue from "express/lib/router";
export default{
    data(){
        return{
        store
    }
    }


}
</script>
<style>
@font-face {
  font-family: 'Bebas Nueue';
  src: url('~@/assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf') format('truetype');
}

#app{
  display: grid;
  grid-template-columns: repeat(3,1fr);
}
body{
  background-color: #444444;

}
a{
  font-size: 64px;
  letter-spacing: 3px;
  color:#8873B6;
  font-family: "Bebas Nueue",sans-serif ;
}
a:link{
  text-decoration: none;
}
.Ms_Pic{
  display: flex;
  align-items: center;
}
.Ms_Pic a{
  margin-left: 10%;
}
.PPN img{
  margin-right: 100px;
}
.email-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.email-label a{
  font-size: 32px;
 }
.email-label{
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;
}
.email-address a{
  font-size: 16px;
}
.workplace-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
}

.workplace-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.workplace-label a {
  font-size: 32px;
}

.workplace-address {
  color: gray;
}

.workplace-address a {
  font-size: 16px;
}
.MS_Profile{
  display: grid;
  grid-template-rows: repeat(2,1fr);
}
.MS_info {
  display: grid;
  grid-template-rows: repeat(2,1fr);
}
.BackMenu{
  margin-top: 140%;
  margin-left: 30%;
}
.P img{
  margin-top: -1%;
  height: 104%;
}
</style>