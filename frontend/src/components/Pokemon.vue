<template>
    <div id="pokemon">
        <Table :data="guns" />
    </div>
</template>

<script>
import axios from 'axios'
import Table from './Table.vue'

export default {
    components: {
        Table
    },
    data() {
        return {
            guns: null
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/api')
            .then(res => { this.guns = res })
            .catch(console.log)
    }
}
</script>

<style scoped>

</style>