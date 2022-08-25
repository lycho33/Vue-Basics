const app = Vue.createApp({
    data() {
        return {
            //can put in any property
            //like a prop, can be INTERPOLATED in HTML
            age: 35,
            name: 'John',
            url: 'https://i.pinimg.com/originals/f4/cc/23/f4cc2387d351b39d11fc106ac3aea34a.jpg',
            counter: 0,
        }
    },
    methods: {
        ageCalc() {
            return this.age + 5
        },
        randomNum() {
            const random = Math.random();
            console.log(random)
            return random;
        }
    }
});

app.mount('#assignment');