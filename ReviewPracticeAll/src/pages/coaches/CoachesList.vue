<template>
    <div>
         <section>
            <coach-filter @change-filter="setFilters" />
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline">Refresh</base-button>
                    <!-- sends link as a prop and is automatically TRUE -->
                    <router-link v-if="!isCoach" link to="/register">Register as Coach</router-link>
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
import CoachFilter from '../../components/coaches/CoachFilter.vue'

export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true,
            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if(this.activeFilters.frontend && coach.areas.includes('frontend')) return true;
                if(this.activeFilters.backend && coach.areas.includes('backend')) return true;
                if(this.activeFilters.career && coach.areas.includes('career')) return true;
            })
            return false;
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        },
        isCoach() {
            return this.$store.getters['coaches/isCoach'];
        }
    },
    methods: {
        //comes from the CoachFilter emiters function
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
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