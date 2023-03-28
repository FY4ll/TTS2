<script></script>
<template>
  <div class="Arrow">
    <a>PROFILE</a>
    <img src="./IMG/Arrow%20Left.svg">
  </div>
  <div class="main_logo">
    <img src="./IMG/image.png" alt="MAIN">
  </div>
  <div class="Arrow">
    <a>SALLE</a>
    <img src="./IMG/Arrow%20Right.svg">
  </div>
</template>
<style>
@font-face {
  font-family: 'Bebas Nueue';
  src: url('~@/assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf') format('truetype');
}
body{
  background-color: #444444;

}
a{
  font-size: 64px;
  color:#8873B6;
  font-family: "Bebas Nueue",sans-serif ;
}
#app{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin-top: 25%;

}
div{
  display: flex;
  justify-content: center;
}
.main_logo img{
  margin-top: -50%;
}
.Arrow{
  display: grid;
  grid-template-rows: repeat(2,1fr);
}
.Arrow a{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>