<template>
    <div>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid</p>
            <p>Please check all inputs and make sure you enter at least a few characters in the input</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea type="text" id="description" name="description" rows="3"  ref="desInput"/>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
    </div>
</template>

<script>
    import BaseCard from '../../../../Badges-Assignment/src/components/UI/BaseCard.vue'
    import BaseButton from '../UI/BaseButton.vue'
    import BaseDialog from '../UI/BaseDialog.vue'

export default {
    components: { BaseCard, BaseButton, BaseDialog },
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false,
        }
    },
    methods: {
        submitData() {
            console.log('can submit data')
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDescription = this.$refs.desInput.value;
            const enteredLink = this.$refs.linkInput.value;

            if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === '') {
                this.inputIsInvalid = true;
            }
            this.addResource(enteredTitle, enteredDescription, enteredLink);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>