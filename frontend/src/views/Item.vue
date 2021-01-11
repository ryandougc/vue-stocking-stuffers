<template>
    <div id="item">
        <p v-for="item in data" :key="item._id">
            {{ item.name }}
        </p>
    </div>
</template>

<script >
import axios from 'axios'

export default {
    name: 'Item',
    data() {
        return {
            data: null
        }
    },
    mounted() {
        axios.get('http://localhost:3000/item')
            .then( response => { this.data = response.data })
            .catch( err => { console.log(err) })
    }
}
</script>

<style scoped>

</style>