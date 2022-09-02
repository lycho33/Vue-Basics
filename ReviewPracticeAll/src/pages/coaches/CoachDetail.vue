<template>
    <div>
        <h1>details for coach</h1>
        <!-- this is needed because it has a child route -->
        <router-view />
        <router-link to="/coaches/c1/contact">Contact</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>