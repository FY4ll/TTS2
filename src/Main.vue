<script>

</script>
<template>
  <div class="Arrow">
    <router-link to="/profile">Profile</router-link>
    <img src="./IMG/Arrow%20Left.svg">
  </div>
  <div class="main_logo">
    <img src="./IMG/image.png" alt="MAIN">
  </div>
  <div class="Arrow">
    <router-link to="/scene">Scene</router-link>
    <img src="./IMG/Arrow%20Right.svg">
  </div>
</template>
<style scoped>
@font-face {
  font-family: 'Bebas Nueue';
  src: url('src/assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf') format('truetype');
}
#app{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  margin-top: 100%;
}
a{
  font-size: 64px;
  color:#8873B6;
  font-family: "Bebas Nueue",sans-serif ;
}
a:link{
  text-decoration: none;
}

div{
  display: flex;
  justify-content: center;
}
.main_logo img{
  margin-top: 30%;
}
.Arrow{
  display: grid;
  grid-template-rows: repeat(2,1fr);
}
.Arrow a{
  display: flex;
  margin-top: 100%;
  align-items: center;
  justify-content: center;
}
</style>