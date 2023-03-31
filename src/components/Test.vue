<script>
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
export default {
  name: 'BabylonScene',
  mounted() {
    this.engine = new BABYLON.Engine(this.$refs.renderCanvas, true, { preserveDrawingBuffer: true, stencil: true });
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
  props:{
    salle: String
  },
  methods: {
    createScene() {
      const scene = new BABYLON.Scene(this.engine);
      scene.clearColor = new BABYLON.Color3(1, 1, 1);

      const light = new BABYLON.HemisphericLight();

      const camera = new BABYLON.ArcRotateCamera('Camera', 0, 0.8, 10, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(this.$refs.renderCanvas, false);

      BABYLON.SceneLoader.Append('src/assets/', this.salle +'.glb', scene, (newMeshes) => {
        const mesh = scene.meshes[0];
        mesh.position.y = -0.1;
        mesh.position.z = 2;
        mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        //mesh.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);
        scene.activeCamera = null;
        scene.createDefaultCameraOrLight(true);
        scene.activeCamera.attachControl(this.$refs.renderCanvas, false);
      });

      return scene;
    }
  }
};
</script>
<template>
  <div>
    <canvas ref="renderCanvas"></canvas>
  </div>
</template>
<style scoped>

canvas {
  width: 200px;
  height: 100px;
}
</style>
