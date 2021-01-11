<template>
<div id="counter" v-bind:title="msg">
    Counter <button @click=counter++> {{ counter }} </button>
    <p>{{ input }}</p>
    <input type="text" v-model="input">
    <button v-if="seen" v-on:click="reverseMessage">Reverse Message</button>
    <button @click="seen = !seen">Toggle Reverse</button>

    <ul>
        <li v-for="food in foods" :key="food">
            {{ food }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        msg: String
    },
    data() {
        return {
            counter: 0,
            message: this.msg,
            input: this.msg,
            seen: true,
            foods: [
                'Banana',
                'Orange',
                'Blueberry'
            ]
        }
    },
    methods: {
        reverseMessage() {
            this.input = this.input
                .split('')
                .reverse()
                .join('')
        }
    }
}
</script>

<style scoped>

</style>