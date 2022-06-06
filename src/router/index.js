import { createRouter, createWebHistory } from 'vue-router'
//Page du menu
import HomeView from '../views/HomeView.vue'
import EnregistreView from '../views/EnregistreView.vue'
import AmisView from '../views/AmisView.vue'
import ProfilView from '../views/ProfilView.vue'

//Pages depuis la map
import CreerMatchView from '../views/CreerMatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                  name: 'HomeView',             component: HomeView },
    { path: '/enregistre',        name: 'EnregistreView',       component: EnregistreView },
    { path: '/amis',              name: 'AmisView',             component: AmisView },
    { path: '/profil',            name: 'ProfilView',           component: ProfilView },

    { path: '/creerMatch',            name: 'CreerMatchView',           component: CreerMatchView },
  ]
})

export default router


