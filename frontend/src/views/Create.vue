<template>
    <div id="create">
        <form action="" method="POST" @submit=validate>
            <div class="input-group">
                <label for="name-input">Name</label>
                <input type="text" name="name" id="name-input" class="input" v-model="name" >
                <p v-for="(error, index) in errors" :key="index" class="input-error" >
                    <span v-if="error.elem == 'name-input'">{{ error.message }}</span>
                </p>
            </div>

            <div class="input-group">
                <label for="power-input">Power</label>
                <input type="text" name="power" id="power-input" class="input" v-model="power" >
                <p v-for="(error, index) in errors" :key="index" class="input-error" >
                    <span v-if="error.elem == 'power-input'">{{ error.message }}</span>
                </p>
            </div>

            <button type="submit" class="input" >Submit</button>
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
            name: "",
            power: "",
            debounce: []
        }
    },
    watch: {
        name(value) {
            value;
            document.getElementById("name-input").classList.remove('error')

            this.errors.forEach((error, index) => {
                if(error.elem === "name-input") {
                    this.errors.splice(index, ++index)
                }
            })
        },
        power(value) {
            value;
            document.getElementById("power-input").classList.remove('error')

            this.errors.forEach((error, index) => {
                if(error.elem === "power-input") {
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

            if(!this.name) {
                this.errors.push({
                    elem: e.target[0].id,
                    value: e.target[0].value,
                    message: "Name is required"
                })
            }

            if(this.name.length < 4 || this.name.length > 25) {
                this.errors.push({
                    elem: e.target[0].id,
                    value: e.target[0].value,
                    message: "Name must be 4 to 25 characters long"
                })
            }

            if(this.power.length > 0 && (this.power.length < 4 || this.power.length > 25)) {
                this.errors.push({
                    elem: e.target[1].id,
                    value: e.target[1].value,
                    message: "Power must be 4 to 25 characters long"
                })
            }

            if(this.errors.length === 0)  {
                axios.post('http://localhost:3000/item', {
                    name: this.name
                })
                .then(response => {
                    if(response.status === 200) {
                        router.push('/')
                    }
                })
                .catch(console.log)
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
.isActive {
    background-color: yellow;
}
.input-group {
    margin-bottom: 35px;
}
.input {
    width: 300px;
    display: block;
}
.error {
    border-color: red;
}
.error:focus {
    outline: none !important;
    border:2px solid red;
}
.input-error {
    color: red;
}
button {
    color: #fff;
    background-color: rgb(19, 100, 57);
}
</style>