<template>
    <div>
        <button @click="confirmInput">Confirm</button>
        <button @click="saveChanges">Save Changes</button>
        <ul>
            <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
        </ul> 
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
        changesSave: false,
    }
  },
  methods: {
    confirmInput() {
        // used to automatically navigate to another page once method is invoke/event occurs
        this.$router.push('/teams');
    },
    saveChanges() {
        this.changesSave = true;
    }
  },
  //confirm this navigation action - Naviation Guard
  beforeRouteEnter(to, from, next) {
    next();
  },
  //help make sure that users don't accidentally forget their input
    beforeRouteLeave(to, from, next){
        //console.log(to, from)
        if(this.changesSave){
            //confirms the navigation
            next()
        } else {
            const userWantsToLeave = prompt('Are you sure? You go unsave changes!');
            //cancels the naviagtion 
            next(userWantsToLeave);
        }
    }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>