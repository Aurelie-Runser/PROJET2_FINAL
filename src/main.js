import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"

import mitt from "mitt";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdJqpAX3ZCAIQJHXj74ztjYNKsxdkYGLU",
    authDomain: "mmi-projet-s2.firebaseapp.com",
    projectId: "mmi-projet-s2",
    storageBucket: "mmi-projet-s2.appspot.com",
    messagingSenderId: "550042140402",
    appId: "1:550042140402:web:9f63d2531df0c1a0b61a6b"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')
