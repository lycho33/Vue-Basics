<template>
    <base-card>
        <base-button 
            @click="setSelectedTab('stored-resources')" :mode="StoredResButtonMode"
            >
                Store Resources
            </base-button>
        <base-button 
            @click="setSelectedTab('add-resouce')"
            :mode="AddResButtonMode"
        >
            Add Resource
        </base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from '../learning-resources/StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resource',
            storedResources: [
                { 
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                { 
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.org'
                }
            ],
        }
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    computed: {
        StoredResButtonMode(tab) {
            return this.selectedTab ==='stored-resources' ? null : 'flat';
        },
        AddResButtonMode(tab) {
            return this.selectedTab === 'add-resouces' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>