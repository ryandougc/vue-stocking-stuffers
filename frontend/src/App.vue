<template>
    <div id="app-container">
        <div id="title">
            <span>🎄</span>
            <h1>Stocking Stuffer Ideas</h1>
            <span>🎁</span>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/create">Add Item</router-link>
        </div>

        <router-view/>

        <footer>
            <p id="copyright">© 2021 ryancarr</p>
        </footer>
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

#app-container {
    width: 100vw;

    padding-top: 30px;
}

#title {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    text-align: center;
    font-size: 2em;
}

#nav {
    margin-top: 35px;
    padding-bottom: 50px;

    text-align: center;
}

#nav a {
    padding: 0 5px 0 5px;

    color: var(--text-color);
    font-weight: bold;
}

#nav a:visited {
    color: var(--text-color);
}

#nav a.router-link-exact-active {
    color: var(--accent-green);
}

#copyright {
    margin-top: 50px;

    text-align: center;
    color: var(--text-color);
}

@media (min-width: 768px) {
    #app-container {
        width: 60%;
        margin: auto;
    }
}
</style>
