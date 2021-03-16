import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Events from '../components/news/Events.vue';
import Meetings from '../components/news/Meetings.vue';
import Camps from '../components/news/Camps.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Головна',
        },
    },
    {
        path: '/news',
        component: News,
        children: [
            {
                path: '',
                component: Events,
                meta: {
                    title: 'Події',
                },
            },
            {
                path: 'events',
                component: Events,
                meta: {
                    title: 'Події',
                },
            },
            {
                path: 'meetings',
                component: Meetings,
                meta: {
                    title: 'Збори',
                },
            },
            {
                path: 'camps',
                component: Camps,
                meta: {
                    title: 'Табори',
                },
            },
        ],
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
