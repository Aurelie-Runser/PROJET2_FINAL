import { createRouter, createWebHistory } from 'vue-router'
//Page du menu
import HomeView from '../views/HomeView.vue'
import EnregistreView from '../views/Enregistrement/EnregistreView.vue'
import AmisView from '../views/AmisView.vue'
import ProfilView from '../views/ProfilView.vue'

import Page404View from '../views/Page404View.vue'
import ConnexionView from '../views/ConnexionView.vue'

//Pages depuis la map
import CreerMatchView from '../views/CreerMatchView.vue'

//Pages depuis les Enregistrements
import CreateEnregistre from '../views/Enregistrement/CreateView.vue'
import UpdateEnregistre from '../views/Enregistrement/UpdateView.vue'

//Pages depuis Amis
import ProfilAmiView from '../views/ProfilAmiView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/enregistre', name: 'EnregistreView', component: EnregistreView },
    { path: '/amis', name: 'AmisView', component: AmisView },
    { path: '/profil', name: 'ProfilView', component: ProfilView },
    { path: '/connexion', name: 'connexionView', component: ConnexionView },

    { path: '/creerMatch', name: 'CreerMatchView', component: CreerMatchView },

    { path: '/createEnregistre', name: 'CreateEnregistre', component: CreateEnregistre },
    { path: '/updateEnregistre', name: 'UpdateEnregistre', component: UpdateEnregistre },

    { path: '/profilAmi', name: 'ProfilAmiView', component: ProfilAmiView },



    //page 404 
    {
      path: '/:catchAll(.*)',
      name: 'Page404View',
      component: Page404View
    },


  ]
})

export default router


