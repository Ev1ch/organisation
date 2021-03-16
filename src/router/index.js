import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Головна' },
    },
    {
        path: '/news',
        name: 'News',
        component: News,
        meta: { title: 'Новини' },
    },
    // {
    //     // path: '/about',
    //     // name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
