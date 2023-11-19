import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";
import login from "../pages/auth/login.vue";
import register from "../pages/auth/register.vue";
import notes from "../pages/notes/index.vue"
import forbidden from "../pages/errors/forbidden.vue";

import useState from "../services/state.js"

const routes = [

    // auth

    {
        path: "/connexion",
        name: "login",
        meta: {
            title: "Se connecter a mon compte",
        },
        component: login,
    },

    {
        path: "/inscription",
        name: "register",
        meta: {
            title: "Cree un compte",
        },
        component: register,
    },

    {
        path: "/",
        name: "home",
        meta: {
            title: "Accueil",
            requireAuth: true,
        },
        component: home,
    },
    {
        path: "/notes",
        name: "note.index",
        meta: {
            title: "Mes notes",
            requireAuth: true,
        },  
        component: notes,
    },

    // errors 
    {
        path: "/forbidden",
        name: "forbidden",
        meta: {
            title: "Vous n'avez pas acces a cette page",
        },
        component: forbidden,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


const {state} = useState()
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if (to.meta.requireAuth && !state.token) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;
