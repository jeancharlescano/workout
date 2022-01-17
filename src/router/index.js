import { createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home.vue"; // "@" part de src


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    mod: 'history',
    routes,
});

export default router;