<template>
    <div class="grid-container">
        <div class="Scene" v-for="(salle, index) in Salles" :key="index" ref="scene">
            <BabylonScene :salle="salle"/>
            <a class="title">{{ salle }}</a>
        </div>
        <div class="Arrow">
            <router-link to="/">MAIN MENU</router-link>
            <img src="./IMG/Arrow%20Left.svg">
        </div>
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
        toggleFullscreen(element) {
            element.classList.toggle('canvas-fullscreen');
            if (element.classList.contains('canvas-fullscreen')) {
                // Si l'élément est en plein écran, on le redimensionne
                const babylonScene = element.getElementsByTagName('babylon-scene')[0];
                babylonScene.expandCanvas();
            }
        },
        ShowRoom(event) {
            const scene = event.currentTarget;
            if (scene.classList.contains('canvas-fullscreen')) {
                // Si l'élément est en plein écran, on le redimensionne
                const babylonScene = scene.getElementsByTagName('babylon-scene')[0];
                babylonScene.expandCanvas();
                return;
            }
            // Changement du style de la div
            scene.classList.add('canvas-fullscreen');
            // Ecouteur d'événements pour détecter la sortie du mode plein écran
            document.addEventListener('fullscreenchange', () => {
                if (!document.fullscreenElement) {
                    // Si on sort du mode plein écran, on rétablit le style initial
                    scene.classList.remove('canvas-fullscreen');
                }
            });
            // Ecouteur d'événements pour détecter l'appui sur la touche "échap"
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    scene.classList.remove('canvas-fullscreen');
                }
            });
        },
    },
    mounted() {
        const scenes = this.$refs.scene;
        for (let i = 0; i < scenes.length; i++) {
            scenes[i].addEventListener('click', (event) => {
                this.ShowRoom(event);
            });
        }
    }
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(300px, auto);
    grid-gap: 20px;
    justify-items: center;
}

.Scene {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.3s ease;
}

.Scene a {
    bottom: 10px;
    left: 10px;
    font-size: 20px;
}
</style>
