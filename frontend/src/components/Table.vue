<template>
    <div id="table">
        <table>
            <tr v-for="gun in data.data" :key="gun.firearmid">
                {{ gun }}
                <td v-for="property in gun" :key="property">
                    {{ property }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        data: String
    }
}
</script>

<style scoped>

</style>