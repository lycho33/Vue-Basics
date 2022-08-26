const app = Vue.createApp({
    data() {
        return {
            //can put in any property
            //like a prop, can be INTERPOLATED in HTML
            age: 35,
            name: 'John',
            lastName: '',
            // fullName: '',
            url: 'https://i.pinimg.com/originals/f4/cc/23/f4cc2387d351b39d11fc106ac3aea34a.jpg',
            counter: 0,
            confirmedName: '',
            message: '',
            confirmedMessage: '',
            number: 0,
            boxASelected: false,
            boxBSelected: false,
            boxCSelecrted: false,
        }
    },
    watch: {
        counter(value) {
            if(value > 50) {
                const that = this;
                setTimeout(function() {
                    //this wouldn't have the same context
                    that.counter = 0;
                }, 2000);
            }
        },
        // name(value) {
        //     if(value === ''){
        //         this.fullName = '';
        //     } else {
        //         this.fulName = value + ' ' + this.lastName; 
        //     }
        // },
        // lastName(value) {
        //     if(value === ''){
        //         this.fullName = '';
        //     } else {
        //         this.fulName = this.name + ' ' + value; 
        //     }
        // }
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000)
        }
    },
    computed: {
        fullname() {
            if(this.name === '' || this.lastName === ''){
                return '';
            } else {
                return this.name + ' ' + this.lastName;
            }
        },
        result() {
            if(this.number < 37) {
                return 'Not there yet!';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
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
        outputFullname() {
            if(this.name === ''){
                return '';
            } else {
                return this.name + ' ' + 'Robinson'
            }
        },
        setName(e, lastName) { 
            this.name = e.target.value;
        },
        submitForm(e) {
            alert('Submitted!')
        },
        confirmInput() {
            this.confirmedName = this.name;
            this.confirmedMessage = this.message;
        },
        setMessage(e) {
            this.message = e.target.value;
        },
        resetInput() {
            this.name = '';
        },
        addingNum(num) {
            this.number += num;
        },
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelecrted;
            }
        }
    }
});

app.mount('#assignment');