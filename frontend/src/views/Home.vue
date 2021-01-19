<template>
  <div class="home">
      <Table :data="data" />
  </div>
</template>

<script>
import axios from 'axios'
import Table from '../components/Table.vue'

export default {
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
        axios.get('http://localhost:3000/item')
            .then( response => {
                response.data.forEach( item => {
                    this.data.push({
                        name: this.capitalize(item.name),
                        power:  this.capitalize(item.name.charAt(3)),
                        id: item._id
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
