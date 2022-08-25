const app = Vue.createApp({
    data() {
        return {
            //can put in any property
            //like a prop, can be INTERPOLATED in HTML
            age: 35,
            name: 'John',
            url: 'https://i.pinimg.com/originals/f4/cc/23/f4cc2387d351b39d11fc106ac3aea34a.jpg',
            counter: 0,
            confirmedName: '',
        }
    },
    methods: {
        ageCalc() { return this.age + 5 },
        randomNum() {
            const random = Math.random();
            console.log(random)
            return random;
        },
        add(num) { this.counter += num; },
        minus(num) { this.counter -= num; },
        setName(e, lastName) { 
            this.name = e.target.value + ' ' + lastName;
        },
        submitForm(e) {
            alert('Submitted!')
        },
        confirmInput() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#assignment');