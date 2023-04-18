import { createApp } from 'vue'
import Main from './Main.vue'
import App from './App.vue'
import Profile from './Profile.vue'
import Scene from './Scene.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Main },
    { path: '/profile', component: Profile },
    { path: '/scene', component: Scene }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

const errorHandler = (err, vm, info) => {
    console.error('Une erreur est survenue :', err)
    router.push('/')
}

app.config.errorHandler = errorHandler

app.use(router)
app.mount('#app')
