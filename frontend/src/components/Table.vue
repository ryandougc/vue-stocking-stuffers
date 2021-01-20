<template>
    <div id="table-component">

        <div id="table-filters">
            <input type="text" id="search-bar" class="input" placeholder="Search..." autocomplete="off" v-model="searchQuery">
            <select id="item-limit" name="item-limit" class="input" autocomplete="off" v-model="itemLimit">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>

        <table id="table">
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">
                        <div class="table-header-content">
                            <p>{{ capitalize(column) }}</p>
                            <div v-if="column !== 'link'" class="icon" :id="column" @click="sort(column)">
                                <svg fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                                </svg>
                            </div>
                        </div>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody :key="itemRow">
                <transition-group name="list">
                    <tr v-for="(row, index) in filteredData" :key="`row-${index}`" :id="row.id">
                        <td>{{ parseEscaped(row.item) }}</td>
                        <td>{{ row.quantity }}</td>
                        <td>
                            <p v-if="row.link == '-'">{{ row.link }}</p>
                            <a v-else :href="row.link">Link</a>
                        </td>
                        <td>
                            <svg @click="deleteItem(row.id)" fill="none" stroke="#F05D5E" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </td>
                    </tr>
                </transition-group>
            </tbody>
        </table>

        <div id="pagination">
            <button class="input" v-on:click="page = changePage(-1)" >Prev</button>
            <button class="input" v-on:click="page = changePage(1)" >Next</button>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Table',
    props: {
        data: Array
    },
    data() {
        return {
            searchQuery: "",
            itemLimit: 10,
            page: 1,
            sortDirection: 0,
            sortColumn: null,
            itemRow: 0,
            show: true
        }
    },
    computed: {
        sortedData() {
            this.data.forEach(row => {
                for(let property in row){
                    if(typeof row[property] == 'string'){
                        row[property] = this.capitalize(row[property])
                    }
                }
            })

            return this.data
        },
        filteredData() {
            const filteredTable = this.sortedData.filter(row => {

                const searchTerm = this.searchQuery.toLowerCase()
                const properties = []
                let result = null

                for(let property in row){
                    if(property !== 'id') {
                        properties.push(row[property].toString().toLowerCase())
                    }
                }

                properties.forEach(prop => {
                    if(prop.includes(searchTerm)) result = true
                })

                // Fill in empty data with a dash
                this.columns.forEach(column => {
                    if(!row[column] || row[column] == null) row[column] = "-"
                })

                return result
            })

            return filteredTable.slice(this.itemMin, this.itemMax)
        },
        columns() {
            let columnNames = []
            let num = 0

            this.sortedData.forEach(row => {
                let numOfProps = 0
                let propertyNames = []

                for(let property in row){
                    if(property !== "id") {
                        numOfProps++

                        propertyNames.push(property)
                    }
                }

                if(numOfProps > num) {
                    num = numOfProps

                    columnNames = [... propertyNames]
                }
            })

            return columnNames
        },
        tableData() {
            return this.filteredData.slice(this.itemMin, this.itemMax)
        },
        limitTable() {
            if(this.itemLimit === "20") return 20

            if(this.itemLimit === "30") return 30

            return 10
        },
        itemMax() {
            let max = this.limitTable * this.page

            if(max > this.sortedData.length) {
                max = this.sortedData.length
            }

            return max
        },
        itemMin() {
            return this.limitTable * this.page - this.limitTable
        },
        maxPage() {
            let data = this.sortedData

            if(this.searchQuery !== ""){
                data = this.fitleredRows
            }

            let numOfPages = data.length / this.limitTable

            return Math.ceil(numOfPages)
        }
    },
    methods: {
        capitalize(str) {
            if(typeof str !== 'string') return str

            let cleanedString = ''

            cleanedString = str.charAt(0).toUpperCase() + str.slice(1)

            return cleanedString
        },
        parseEscaped(str) {
            let textarea = document.createElement('textarea')

            textarea.innerHTML = str

            return textarea.value
        },
        changePage(direction) {
            if( (direction < 0 && this.page > 1) || (direction > 0 && this.page < this.maxPage) ) return this.page += direction

            return this.page
        },
        sort(index) {
            // Handle props
            if(this.sortColumn === index) {
                if(this.sortDirection === 1) {
                    this.sortDirection = -1
                } else {
                    this.sortDirection = 1
                }
            }else {
                this.sortColumn = index
                this.sortDirection = 1
            }

            // Handle sort icons
            let sortIcons = document.querySelectorAll('.icon')
            // Set all icons to the unsorted Icon
            sortIcons.forEach(icon => {
                icon.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>'
            })

            if(this.sortDirection === 1) {
                // Icon for sort in ascending direction
                document.getElementById(this.sortColumn).innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>`
            }else if(this.sortDirection === -1) {
                // Icon for sort in descending direction
                document.getElementById(this.sortColumn).innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path></svg>`
            }

            // Sort
            this.sortedData.sort((a, b) => {
                if(this.sortDirection === 1){
                    // Handle undefined Columns
                    if(a[this.sortColumn] === undefined && b[this.sortColumn] === undefined) return 1
                    if(a[this.sortColumn] === undefined && b[this.sortColumn] !== undefined) return -1

                    // Handle normal columns
                    if(a[this.sortColumn] > b[this.sortColumn]) return 1

                    return -1
                }else {
                    if(a[this.sortColumn] < b[this.sortColumn]) return 1

                    return -1
                }
            })
        },
        deleteItem(item) {
            axios
                .delete(`${process.env.VUE_APP_LOCAL_API}item/${item}`)
                .then(response => {
                    if(response.status === 200){
                        this.sortedData.forEach((row, index) => {
                            if(row.id === item){
                                this.sortedData.splice(index, 1)
                            }
                        })
                    }
                })
                .catch(console.log)
        }
    },
    watch: {
        itemLimit () {
            this.page = 1
        }
    }
}
</script>

<style scoped>
a {
    color: var(--dark-green);
}
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

svg{
    cursor: pointer;
}

#table-filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--input-group-spacing);
}
#table-filters #search-bar {
    padding: 6px 10px 6px 10px;
}
#table-filters #item-limit {
    width: var(--input-width-small);
    padding-left: 25px;
}
#table-component {
    width: 60%;
    margin: auto;
}
#table {
    width: 100%;
    border-collapse: collapse;
}
#table thead {
    color: var(--text-color);
    background-color: var(--accent-green);
}
#table thead th {
    padding: 20px 35px 10px 35px;
}
#table thead th .table-header-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
#table thead th .table-header-content > :first-child {
    padding-right: 10px;
}
#table thead th .table-header-content .icon{
    width: 25px;
    height: 25px;
    overflow: hidden;
}
#table tbody {
    border: var(--input-border);
    text-align: center;
}
#table tbody svg{
    width: 25px;
    height: 25px;
}
#table tbody tr td {
    color: var(--text-color);
    padding: 10px 35px 10px 35px;
    display: table-cell;
}
#table tbody tr:not(:last-of-type) {
    border-bottom: var(--input-border);
}
#pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--input-group-spacing);
}
#pagination button{
    width: var(--input-width-small);
}
</style>