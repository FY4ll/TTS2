<template>
    <div>
        <canvas ref="renderCanvas" @click="expandCanvas"></canvas>
    </div>
</template>

<script>
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import {store} from '../store.vue'

export default {
    data() {
        return {
            store
        }
    },
    name: 'BabylonScene',
    async mounted() {
        this.engine = new BABYLON.Engine(this.$refs.renderCanvas, true, {preserveDrawingBuffer: true, stencil: true});
        this.engine.setHardwareScalingLevel(1.0); // Fixe la résolution à 1x
        this.scene = this.createScene();
        this.engine.runRenderLoop(() => {
            if (this.scene) {
                this.scene.render();
            }
        });
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    },
    props: {
        salle: String
    },
    methods: {
        createScene() {
            const scene = new BABYLON.Scene(this.engine);
            scene.clearColor = BABYLON.Color3.FromHexString("#6d47d4");

            const light = new BABYLON.HemisphericLight();

            const camera = new BABYLON.ArcRotateCamera('Camera', 0, 0.8, 10, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(this.$refs.renderCanvas, false);

            BABYLON.SceneLoader.Append('src/assets/', this.salle +'.glb', scene, (newMeshes) => {
                const mesh = scene.meshes[0];
                mesh.position.y = -0.1;
                mesh.position.z = 2;
                mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
                mesh.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);
                scene.activeCamera = null;
                scene.createDefaultCameraOrLight(true);
                scene.activeCamera.attachControl(this.$refs.renderCanvas, false);
            });

            return scene;
        },
        expandCanvas() {
            const canvas = this.$refs.renderCanvas;
            canvas.classList.toggle('canvas-fullscreen');
            if (canvas.classList.contains('canvas-fullscreen')) {
                this.engine.resize();
            }
        },

    }
};
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
@media (min-width: 768px) {
    canvas {
        position: relative;
    }
}
.canvas-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
}
</style>
