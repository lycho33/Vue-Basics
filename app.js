const app = Vue.createApp({
    data() {
        return {
            //can put in any property
            //like a prop, can be INTERPOLATED in HTML
            age: 35,
            name: 'John',
        }
    },
    methods: {
        ageCalc() {
            return this.age + 5
        }
    }
});

app.mount('#assignment');