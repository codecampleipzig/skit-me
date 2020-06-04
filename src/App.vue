<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");

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

.playerName {
  font-family: "Rock Salt", cursive;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.7em;
  background-color:#F7B501;
  color: white;
  padding: 12px 32px;
  display: block;
  width: 30%;
  margin: 10px auto;
  margin-top: 1em;
}

.instruction {
  font-family: "Rock Salt", cursive;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.7em;
  background-color: white;
  padding: 12px 32px;
  display: block;
  width: 80%;
  margin: 10px auto;
  margin-top: 2em;
}

.drawThisTitle {
  font-family: "Secular One", sans-serif;
}

.startButton {
  background-color: #008080;
  color: white;
  font-family: "Secular One", sans-serif;
  font-size: 1.5em;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

.countdown {
  font-size: 1.5em;
  background-color: white;
  font-family: "Secular One", sans-serif;
  padding: 12px 32px;
  display: block;
  width: 30%;
  margin: 10px auto;
}

.home img {
  width: 250px;
}
</style>
