import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
// import router from './router'

import './assets/main.css'

const app = createApp(App)

// app.use(router)

app.component('friend-contact', FriendContact)

app.mount('#app')