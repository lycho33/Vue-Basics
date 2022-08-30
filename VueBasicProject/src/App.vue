<template>
    <section>
        <header><h1>My Friends</h1></header>
        <new-friend @add-contact="addContact" />
        <ul>
            <friend-contact 
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name" 
                :phone-number='friend.phone' 
                :email-address='friend.email' 
                :is-favorite="friend.isFavorite"
                @toggle-favorite='toggleFavoriteStatus'
                @delete="deleteContact"
            />
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'

export default {
  components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 90',
                    email: 'manuel@localhost.com',
                    isFavorite: true,
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '0243 34687 12',
                    email: 'julie@localhost.com',
                    isFavorite: false,
                }
            ]
        }
    },
    methods: {
        toggleFavoriteStatus(friendId) {
            const identifiedFriend = this.friends.find(friend => friend.id === friendId);
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        },
        addContact(name, phone, email) {
            const newFriendContact = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false,
            }
            this.friends.push(newFriendContact);
        },
        deleteContact(id) {
            this.friends = this.friends.filter(friend => friend.id !== id);
        }
    }
}
</script>