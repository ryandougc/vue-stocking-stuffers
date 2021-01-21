<template>
  <div id="home">
      <Table :data="data" />
  </div>
</template>

<script>
import axios from 'axios'
import Table from '../components/Table.vue'

export default {
title: 'Stocking Stuffer Ideas',
name: 'Home',
    components: {
        Table
    },
    data() {
        return {
            data: []
        }
    },
    created() {
        axios.get(`${process.env.VUE_APP_LOCAL_API}item`)
            .then( response => {
                response.data.forEach(stuffer => {
                    this.data.push({
                        item: this.capitalize(stuffer.item),
                        quantity: stuffer.quantity,
                        link: stuffer.link,
                        id: stuffer._id
                    })
                })
            })
            .catch( err => { console.log(err) })
    },
    methods: {
        capitalize(str) {
            if(typeof str !== 'string') return str

            let cleanedString = ''

            cleanedString = str.charAt(0).toUpperCase() + str.slice(1)

            return cleanedString
        }
    }
}
</script>

<style scoped>
#home {
    width: 100%
}
</style>