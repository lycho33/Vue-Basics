<template>
    <section>
        <h1>My Friends</h1>
        <ul>
            <friend-contact/>
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