<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url(assets/background-image.png);
  background-size: 100%;
  background-attachment: fixed;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.instruction {
  font-family: 'Rock Salt', cursive;
}

.drawThisTitle {
  font-family: 'Secular One', sans-serif;
}

.button {
  background-color: #008080;
  font-family: 'Secular One', sans-serif;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
}

.home img {
  width: 250px;
}
</style>
