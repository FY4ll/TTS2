import { createApp } from 'vue'
import Main from './Main.vue'
import App from './App.vue'
import Profile from './Profile.vue'
import Scene from './Scene.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', component: Main},
    { path: '/profile', component: Profile },
    { path: '/scene', component: Scene },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
const app = createApp(App)
app.use(router)

app.mount('#app')