<template>
  <div class="Scene" v-for="salle in Salles" ref="scene" @click="ShowRoom">
    <BabylonScene :salle="salle"/>
    <a>{{salle}}</a>
  </div>
    <div class="Arrow">
        <router-link to="/">MAIN MENU</router-link>
        <img src="./IMG/Arrow%20Left.svg">
    </div>
</template>
<script>
import BabylonScene from './components/Test.vue';

export default {
  components: {
    BabylonScene,
  },
  data () {
    return {
      Salles: [
        'chasseron',
        'pleiades',
        'suchet',
        'wengen',
        'argentine',
        'chamossaire',
      ]
    }
  },
  methods: {
    ShowRoom() {
      // Sélection de la div avec la classe "Scene"
      const scene = this.$refs.scene;
      // Changement du style de la div
      scene.st
    }
  }
  }
</script>
<style scoped>
body{
  background-color: #444444;
}
#app{
  display: grid;
  grid-template-columns: 25% 75%;
}
.Scene{
  display: flex;
  align-items: center;
  grid-column: 1;
}
.Scene a{
  margin-left: 5%;
}
.Scene a:hover{
  color: #86b673;
}
</style>