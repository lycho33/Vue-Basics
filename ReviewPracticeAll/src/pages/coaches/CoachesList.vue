<template>
    <div>
         <section>
            FILTER
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline">Refresh</base-button>
                    <!-- sends link as a prop and is automatically TRUE -->
                    <router-link link to="/register">Register as Coach</router-link>
                </div>
                <ul v-if="hasCoaches">
                    <li v-for="coach in filteredCoaches" :key="coach.id">
                        <CoachItem 
                            :id="coach.id"
                            :first-name="coach.firstName"
                            :last-name="coach.lastName"
                            :rate="coach.hourlyRate"
                            :areas="coach.areas"    
                        />
                    </li>
                </ul>
                <h3 v-else>No Coaches Found</h3>
            </base-card>
        </section>
    </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'

export default {
    components: {
        CoachItem,
    },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>