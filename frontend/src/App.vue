<template>
<div id="app">
    <Table :columns="columns" :data="data"/>
</div>
</template>

<script>
import axios from 'axios'
import Table from './views/Table'

export default {
    name: 'App',
    components: {
        Table
    },
    data() {
        return {
            data: []
        }
    },
    created() {
        axios.get('http://localhost:3000/item')
            .then( response => {
                response.data.forEach( item => {
                    this.data.push({
                        name: item.name,
                        power: item.name.charAt(3)
                    })
                })

                this.data[2].test = "test"
            })
            .catch( err => { console.log(err) })
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>