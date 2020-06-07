<template>
  <div id="app">
      <router-link to="/"> </router-link>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
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
  border: #D2723A 2px dotted;
  border-radius: 5px;
  display: grid;
  align-items: center;
animation: fadeIn 0.7s ease;

  /* margin-top: 2em; */
}

.instructions h2{
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
  background-color: #D2723A;
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
  border: black 3px solid ;
}

.logo {
 width: 250px;
  margin: auto;
}

img:not(.logo) {
  width: 250px;
  margin: auto;
  animation: slideIn .7s ease-in-out;
  border: saddlebrown 2px solid;
}

@keyframes slideIn {
  0% {
    transform: skewX(30deg) translateX(-500px);
    opacity: 0;
    }
    60% {
      transform: translateX(0px);
      scale: 100%
    }
    62% {
      transform: skewX(0deg) translateX(30px);
    }
    70% {
      transform: skew(-20deg);
      opacity: 1;
    }
    80% {
      transform: skew(0deg) translate(0);
    }
    90% {
      transform: skew(-5deg);
    }
    100% {
transform: skewX(0deg)
      }
}

@keyframes fadeIn {
0% {
transform: translateY(-50px);
opacity: 0;
}
100% {
transform: translate(0);
opacity: 1;
}
}

</style>
