<template>
    <section>
        <header><h1>My Friends</h1></header>
        <ul>
            <friend-contact 
                name="Maunel Lorenz" 
                phone-number='0123 45678 90' 
                email-address='manuel@localhost.com' 
            />
            <friend-contact 
                name="julie" 
                phone-number='0243 34687 12' 
                email-address='julie@localhost.com' 
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