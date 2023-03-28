<template>
  <div>
    <BabylonScene v-for="salle in Salles" :key="salle.id" :salle="salle"/>
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
'        argentine',
        'chamossaire',
        'monch',
        'eiger'
      ]
    }
  }
  }
</script>
