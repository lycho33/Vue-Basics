<template>
    <section>
        <header><h1>My Friends</h1></header>
        <ul>
            <friend-contact 
                v-for="friend in friends"
                :key="friend.id"
                :name="friend.name" 
                :phone-number='friend.phone' 
                :email-address='friend.email' 
                :is-favorite="true"
            />
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0243 34687 12',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
}
</script>