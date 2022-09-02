import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from './pages/ProductsList.vue'
import UserCart from './pages/UserCart.vue'
import ShopAdmin from './pages/ShopAdmin.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products'},
        { name: 'products', path: '/products', component: ProductsList },
        { name: 'cart', path: '/cart', component: UserCart }
    ]

})

export default router;