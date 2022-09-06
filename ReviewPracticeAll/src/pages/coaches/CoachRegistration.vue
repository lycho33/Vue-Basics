<template>
    <div>
        <base-card>
            <section>
                <h2>Register as a coach now!</h2>
                <coach-form @save-data="saveData" />
            </section>
        </base-card>
    </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
    components: { CoachForm },
    methods: {
        saveData(formData) {
            this.$store.dispatch('coaches/registerCoach', formData);
            //navigate to another page & can't go back to the Form page
            this.$router.replace('/coaches')
        }
    },
}
</script>

<style scoped>

</style>
