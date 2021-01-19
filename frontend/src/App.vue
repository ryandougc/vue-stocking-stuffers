<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/create">Add Item</router-link>
        </div>

        <router-view/>
    </div>

</template>

<style>
* {
    margin: 0;
    padding: 0;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.99em;

    --input-group-spacing: 10px;
    --input-height: 35px;
    --input-width-small: 85px;
    --input-border: 1px solid lightgray;
    --input-border-radius: 3px;
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

body {
    background-color: rgb(245, 245, 245);
}

#nav {
    text-align: center;
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
