import { createRouter, createWebHistory } from 'vue-router'

import {getAuth} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

import{
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
}from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js"


//Page du menu
import MapView from '../views/MapView.vue'
import EnregistreView from '../views/Enregistrement/EnregistreView.vue'
import AmisView from '../views/AmisView.vue'
import ProfilView from '../views/Profil/ProfilView.vue'

import Page404View from '../views/Page404View.vue'
import ConnexionView from '../views/ConnexionView.vue'
import ContactView from '../views/ContactView.vue'

//Pages depuis la map
import CreerMatchView from '../views/Match/CreerMatchView.vue'

//Pages depuis les Enregistrements
import CreerEnregistre from '../views/Enregistrement/CreerEnregistreView.vue'
import ModifEnregistre from '../views/Enregistrement/ModifEnregistreView.vue'
import CreateEnregistre from '../views/Enregistrement/CreateView.vue'
import UpdateEnregistre from '../views/Enregistrement/UpdateView.vue'
import DeleteEnregistre from '../views/Enregistrement/DeleteView.vue'

//Pages depuis Amis
import ProfilAmiView from '../views/ProfilAmiView.vue'

//Pages depuis Profil
import UpdateProfil from "../views/Profil/UpdateView.vue"

//mention legales 
import mentionView from '../views/mentionView.vue'
import { nextTick } from 'vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/map',                   name: 'MapView',          component: MapView,          beforeEnter:guard },
    { path: '/enregistre',            name: 'EnregistreView',   component: EnregistreView,   beforeEnter:guard },
    { path: '/amis',                  name: 'AmisView',         component: AmisView,         beforeEnter:guard },
    { path: '/profil',                name: 'ProfilView',       component: ProfilView,       beforeEnter:guard },
    { path: '/mentionlegale',         name: 'mentionView',      component: mentionView,      beforeEnter:guard },

    { path: '/creerMatch',            name: 'CreerMatchView',   component: CreerMatchView,   beforeEnter:guard },

    { path: '/creerEnregistre',       name: 'CreerEnregistre',  component: CreerEnregistre,  beforeEnter:guard },
    { path: '/modifEnregistre',       name: 'ModifEnregistre',  component: ModifEnregistre,  beforeEnter:guard },
    { path: '/createEnregistre',      name: 'CreateEnregistre', component: CreateEnregistre, beforeEnter:guard },
    { path: '/updateEnregistre/:id',  name: 'UpdateEnregistre', component: UpdateEnregistre, beforeEnter:guard },
    { path: '/deleteEnregistre/:id',  name: 'DeleteEnregistre', component: DeleteEnregistre, beforeEnter:guard },

    { path: '/profilAmi',             name: 'ProfilAmiView',    component: ProfilAmiView,    beforeEnter:guard },

    { path: '/updateProfil/:id',      name: 'UpdateProfil',     component: UpdateProfil,     beforeEnter:guard },
    { path: '/',                      name: 'connexionView',    component: ConnexionView },

    { path: '/contact',               name: 'ContactView',      component: ContactView },

    //page 404 
    { path: '/:catchAll(.*)',         name: 'Page404View',      component: Page404View },

  ]
})

export default router

function guard(to, from, next){
  getAuth().onAuthStateChanged(function(user){
    if(user){
      console.log("router OK => user ", user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "Profils");
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) =>{
        let userInfo = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        next(to.params.name);
        return;
      })
      
    }
    else{
      console.log("router NOK => user ", user);
      next({name:"connexionView"})
    }
  })
}
