import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals }
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

//when the app starts view router shouldn't start right away with the animation
//router successfully evaluates which page should be loaded
//only mount and render when the router knows which page should be loaded
router.isReady().then(function() {
  app.mount('#app');
});


