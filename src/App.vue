<template>
  <div id="app">
    <router-link to="/"> </router-link>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
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
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.7em;
  background-color: #f7b501;
  color: white;
  padding: 12px 32px;
  display: block;
  width: 30%;
  margin: 10px auto;
  margin-top: 2em;
}

.instructions {
  font-family: "Indie Flower", cursive;
  background-color: rgb(253, 253, 226);
  size: 1em;
  text-align: center;
  width: 60%;
  height: 75px;
  margin: 10px auto;
  border: #d2723a 2px dotted;
  border-radius: 5px;
  display: grid;
  align-items: center;
  /* margin-top: 2em; */
}

.instructions h2 {
  margin: 0 auto;
}

.drawThisTitle {
  font-family: "Secular One", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.7em;
  background-color: #f7b501;
  color: rgb(63, 62, 62);
  padding: 12px;
  display: block;
  width: 800px;
  margin: 10px auto;
  margin-top: 2em;
}

#panic-button {
  background-color: rgb(255, 182, 139);
  font-family: "Secular One", sans-serif;
  font-size: 1.5em;
  color: red;
  border: black 2px solid;
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
  font-size: 2em;
  font-family: "Secular One", sans-serif;
  color: rgb(0, 0, 0);
  width: 1.5em;
  height: 1.5em;
  display: block;
  background-color: #d2723a;
  position: absolute;
  margin: 5px 200px;
  top: 500;
  border: black 3px solid;
  border-radius: 50%;
}

input {
  display: block;
  width: 753px;
  height: 1em;
  padding: 0 1em;
  margin: 20px auto;
  font-size: 2em;
  border: black 3px solid;
}

.home img {
  width: 250px;
  margin: auto;
}
</style>
