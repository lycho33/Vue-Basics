import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //default component for homepage
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      
      meta: { needsAuth: true},
      //multiple router views in a component
      component: { default: TeamsList, footer: TeamsFooter },
      //nested route
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList
    { 
        path: '/users', 
        component: { 
            default: UsersList, 
            footer: UsersFooter 
        }, 
        beforeEnter(to, from, next) {
            next();
        }
    },
    //redirect to a component for when the page isn't found
    { path: '/:notFound(.*)', component: NotFound }
  ],
  //can be used for CSS - go to TheNavigation
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPostition) {
    //savedPosition: scrolled position

    // console.log(to, from, savedPostition)
    
    //saves the place we scrolled to
    if(savedPostition) {
        return savedPostition
    }
    //jumps to the top of the page
    return { left: 0, top: 0 }
  }
});

//NAVIGATION GUARDS

// router.beforeEach(function(to, from, next) {
//     console.log('Global beforeEach')
//     console.log(to, from);
//     if(to.name === 'team-members') {
//         next();
//     } else {
//         //confirms/cancels this navigation action ==> helpful with userAuth
//         next({name: 'team-members', params: { teamId: 't2' }});
//     }
// })

router.afterEach(function(to, from) {
    //sending analytics data
    //console.log(to, from)
})

const app = createApp(App);

app.use(router);

app.mount('#app');
