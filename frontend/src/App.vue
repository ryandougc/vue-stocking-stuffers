<template>
    <div id="app">
        <div id="title">
            <h1>🎄 Stocking Stuffer Ideas 🎁</h1>
        </div>
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

    --text-color: #182522;
    --background-light:  rgb(245, 245, 245);
    --error-red:  #F05D5E;
    --accent-green: #A3C4BC;
    --dark-green: #285943;

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
    background-color: var(--background-light);
}

#app {
    margin-top: 50px;
}

#title {
    text-align: center;
    font-size: 2em;
}

#nav {
    text-align: center;
    padding: 30px;
    margin-bottom: 35px;
}

#nav a {
    font-weight: bold;
    color: var(--text-color)
}

#nav a:visited {
    color: var(--text-color);
}

#nav a.router-link-exact-active {
    color: var(--accent-green);
}
</style>
