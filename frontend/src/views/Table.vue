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
                        <div class="table-header-content" @click="sort(column)">
                            <p>{{ capitalize(column) }}</p>
                            <div class="icon" :id="column">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>'
                                </svg>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in filteredRows" :key="`row-${index}`">
                    <td v-for="(cell, jindex) in row" :key="`row-${jindex}`">
                        <p>{{ cell }}</p>
                    </td>
                </tr>
            </tbody>
        </table>

        <div id="pagination">
            <button class="input" v-on:click="page = changePage(-1)" >Prev</button>
            <button class="input" v-on:click="page = changePage(1)" >Next</button>
        </div>

    </div>
</template>

<script >
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
        }
    },
    computed: {
        columns() {
            let columnNames = []
            let num = 0

            this.sortedData.forEach(row => {
                let numOfProps = 0
                let propertyNames = []

                for(let property in row){
                    numOfProps++

                    propertyNames.push(property)
                }

                if(numOfProps > num) {
                    num = numOfProps

                    columnNames = [... propertyNames]
                }
            })

            return columnNames
        },
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
        limitTable() {
            if(this.itemLimit === "20") return 20

            if(this.itemLimit === "30") return 30

            return 10
        },
        filteredRows() {
            const filteredTable = this.sortedData.filter(row => {
                const searchTerm = this.searchQuery.toLowerCase()
                const properties = []
                let result = null

                for(let property in row){
                    properties.push(row[property].toString().toLowerCase())
                }

                properties.forEach(prop => {
                    if(prop.includes(searchTerm)) result = true
                })

                // Fill in empty data with a dash
                this.columns.forEach(column => {
                    if(!row[column]) row[column] = "-"
                })

                return result
            })

            return filteredTable.slice(this.itemMin, this.itemMax)
        },
        itemMax() {
            let max = this.limitTable * this.page

            if(max > this.data.length) {
                max = this.data.length
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
            sortIcons.forEach(icon => {
                icon.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>'
            })

            if(this.sortDirection === 1) {
                document.getElementById(this.sortColumn).innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                            </svg>`
            }else if(this.sortDirection === -1) {
                document.getElementById(this.sortColumn).innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path>
                            </svg>`
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
        }
    },
    watch: {
        itemLimit () {
            this.page = 1
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-size: 0.985em;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    --input-group-spacing: 10px;
    --input-height: 35px;
    --input-width-small: 85px;
    --input-border: 1px solid lightgray;
    --input-border-radius: 3px;
}
svg{
    cursor: pointer;
}
.input {
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    height: var(--input-height);
    background-color: #FFF;
    border: var(--input-border);
    border-radius: var(--input-border-radius);
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
    color: #E5E7E6;
    background-color: #4F9D69;
}
#table thead th {
    padding: 14px 35px 8px 35px;
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
}
#table tbody tr td {
    padding: 10px 35px 10px 35px;
    display:table-cell;
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