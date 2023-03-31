<template>
  <div class="Scene" v-for="salle in Salles" ref="scene" @click="ShowRoom">
    <BabylonScene :salle="salle"/>
    <a>{{salle}}</a>
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
        'dent-de-vaulion' ,
        'pleiades',
        'suchet',
        'wengen',
        'dent-du-midi',
        'jungfrau',
        'argentine',
        'chamossaire',
        'monch',
        'eiger',
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