<template>
    <div>
    <base-card>
        <base-button 
            @click="setSelectedTab('stored-resources')" 
            :mode="StoredResButtonMode"
            >
                Store Resources
        </base-button>
        <base-button 
            @click="setSelectedTab('AddResourceTo')"
            :mode="AddResButtonMode"
        >
                Add Resource
        </base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
    </div>
</template>

<script>
import StoredResources from '../learning-resources/StoredResources.vue'
import AddResourceTo from './AddResourceTo.vue'

export default {
    components: {
        StoredResources,
        AddResourceTo
    },
    data() {
        return {
            selectedTab: 'add-resource',
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
            resources: this.storedResources,
            addResource: this.addResource,
        }
    },
    computed: {
        StoredResButtonMode() {
            return this.selectedTab ==='stored-resources' ? null : 'flat';
        },
        AddResButtonMode() {
            return this.selectedTab === 'add-resouce-to' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url,
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        }
    },
}
</script>