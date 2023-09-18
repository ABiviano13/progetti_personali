//importare i deguenti due metodi, di cui uno sarà registrato in una variabile e l'altro l'history della stessa
import { createRouter, createWebHistory } from 'vue-router'

//importare i componenti per registrarli nelle varie routes
import HomeApp from './pages/HomeApp.vue'
import TechnologiesApp from './pages/Technologies.vue'
import ProjectsApp from './pages/ProjectsApp.vue'
import ContactsApp from './pages/ContactsApp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeApp
        },
        {
            path: '/tecnologies',
            name: 'tecnologies',
            component: TechnologiesApp
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsApp
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsApp
        }
    ]
})

//esportare alla fine router
export { router }