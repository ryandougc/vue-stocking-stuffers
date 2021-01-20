<template>
    <div id="create">
        <form action="" method="POST" @submit=validate>
            <div class="input-group">
                <label for="item-input">Item</label>
                <input type="text" name="item" id="item-input" class="input" v-model="item" >
                <p v-for="(error, index) in errors" :key="index" class="input-error" >
                    <span v-if="error.elem == 'item-input'">{{ error.message }}</span>
                </p>
            </div>

            <div class="input-group">
                <label for="quantity-input">Quantity</label>
                <input type="number" name="quantity" id="quantity-input" class="input" v-model.number="quantity" >
                <p v-for="(error, index) in errors" :key="index" class="input-error" >
                    <span v-if="error.elem == 'quantity-input'">{{ error.message }}</span>
                </p>
            </div>

            <div class="input-group">
                <label for="link-input">Link</label>
                <input type="text" name="link" id="link-input" class="input" v-model="link" >
                <p v-for="(error, index) in errors" :key="index" class="input-error" >
                    <span v-if="error.elem == 'link-input'">{{ error.message }}</span>
                </p>
            </div>

            <button type="submit" class="input" id="submit-button">Submit</button>
            <p v-for="(error, index) in errors" :key="index" class="input-error" >
                <span v-if="error.elem == 'submit-button'">{{ error.message }}</span>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
    data() {
        return {
            errors: [],
            item: "",
            quantity: null,
            link: "",
            debounce: []
        }
    },
    watch: {
        item(value) {
            value
            document.getElementById("item-input").classList.remove('error')

            this.errors.forEach((error, index) => {
                if(error.elem === "item-input") {
                    this.errors.splice(index, ++index)
                }
            })
        },
        quantity(value) {
            value
            document.getElementById("quantity-input").classList.remove('error')

            this.errors.forEach((error, index) => {
                if(error.elem === "quantity-input") {
                    this.errors.splice(index, ++index)
                }
            })
        },
        link(value) {
            value
            document.getElementById("link-input").classList.remove('error')

            this.errors.forEach((error, index) => {
                if(error.elem === "link-input") {
                    this.errors.splice(index, ++index)
                }
            })
        },
        errors(values) {
            values.forEach(error => {
                document.getElementById(error.elem).classList.add('error')
            })
        }
    },
    methods: {
        validate(e) {
            e.preventDefault()

            this.errors = []

            if(!this.item) {
                this.errors.push({
                    elem: e.target[0].id,
                    value: e.target[0].value,
                    message: "Item is required"
                })
            }

            if(this.item.length < 2 || this.item.length > 30) {
                this.errors.push({
                    elem: e.target[0].id,
                    value: e.target[0].value,
                    message: "Item must be 2 to 30 characters long"
                })
            }

            if(this.quantity !== null && typeof this.quantity !== "number") {
                this.errors.push({
                    elem: e.target[1].id,
                    value: e.target[1].value,
                    message: "Quantity must be a number"
                })
            }

            if(this.quantity == null) {
                this.errors.push({
                    elem: e.target[1].id,
                    value: e.target[1].value,
                    message: "Quantity is required"
                })
            }

            if(this.errors.length === 0)  {
                axios.post(`${process.env.VUE_APP_LOCAL_API}item`, {
                    item: this.item,
                    quantity: this.quantity,
                    link: this.link
                })
                .then(response => {
                    if(response.status === 200) {
                        router.push('/')
                    }
                })
                .catch(err => {
                    console.log(err)

                    this.errors.push({
                        elem: "submit-button",
                        value: 500,
                        message: `Error 500: Server Error`
                    })
                })
            }
        }
    }
}
</script>

<style scoped>
#create {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
}
.input-group {
    margin-bottom: 35px;
}
label {
    color: var(--text-color);
}
.input {
    width: 300px;
    display: block;
    color: var(--text-color);
}
.error {
    border-color: var(--error-red);
}
.error:focus {
    outline: none !important;
    border: 2px solid var(--error-red);
}
.input-error {
    color: var(--error-red);
}
button {
    color: var(--text-color);
    background-color: var(--accent-green);
}
</style>