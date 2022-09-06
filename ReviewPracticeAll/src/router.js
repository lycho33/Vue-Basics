import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoaches from './pages/requests/ContactCoaches.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachDetail, 
            // id is sent as a prop into ContactCoaches
            props: true,
            children: [
                { path: 'contact', component: ContactCoaches }, // /coaches/c1/contact
            ]       
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },
    ],
})

export default router;