<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Secular+One&display=swap");

:root {
  --light-yellow-background: #e4d178;
  --main-font-color: #433c48;
  --orange: #e19a59;
  --dark-blue: #587783;
}

@media (max-width: 500px) {
  :root {
    font-size: 10px;
  }
}

.interaction {
  font-family: "Indie Flower", cursive;
  font-size: 3em;
  font-weight: bold;
  color: #233e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #233e50;
}

body {
  background-image: url(assets/paper-background.png);
  background-size: cover;
  background-attachment: local;
  background-repeat: repeat-y;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

h1 {
  font-family: "Secular One", sans-serif;
  font-size: 3em;
  color: #233e50;
}

h2 {
  font-family: "Secular One", sans-serif;
  font-size: 1.8em;
  color: #233e50;
}
h3 {
  font-family: "Secular One", sans-serif;
  font-size: 1.5em;
  color: #233e50;
}

#nav {
  padding: 30px;
}

#linkToRoom {
  border: #233e50 3px solid;
  background-color: rgb(255, 255, 255);
  margin: 1em 1em 2em 1em;
  padding: 5px 5px;
  width: 40%;
  font-family: "Secular One", sans-serif;
  font-size: 1.3em;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: all;
}

#nav a {
  font-weight: bold;
  color: #233e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.instructions {
  font-family: "Secular One", sans-serif;
  color: #233e50;
  font-size: 1.7em;
  text-align: center;
  width: 60%;
  height: 75px;
  margin: 2em auto;
  display: grid;
  align-items: center;
}

.instructions h2 {
  margin: 0 auto;
}

.drawThisTitle {
  font-family: "Secular One", sans-serif;
  font-size: 1.7em;
  font-weight: bold;
  line-height: 1.7em;
  /* color still needs to change, it clashes with the petrol */
  color: #233e50;
  max-width: 50vw;
}

.playerNames {
  font-family: "Indie Flower", cursive;
  font-size: 3em;
  font-weight: bold;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
  max-width: 70vw;
  align-content: center;
  margin: auto;
}

.playerNames p {
  margin: 0 30px 30px 30px;
}

.bigButton {
  background-color: #eba6a3;
  color: #233e50;
  font-family: "Secular One", sans-serif;
  font-size: 2em;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

.smallButton {
  background-color: #eba6a3;
  color: #233e50;
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

.timer-phase-container {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: auto;
  grid-template-areas: "timer interaction .";
}

.interaction {
  grid-area: interaction;
  justify-content: center;
  color: #233e50;
}

.countdown {
  font-size: 2em;
  font-family: "Secular One", sans-serif;
  color: #233e50;
  width: 1.5em;
  height: 1.5em;
  display: block;
  background-color: #ffc24b;
  border-radius: 50%;
  grid-area: timer;
  justify-self: right;
}

input {
  display: block;
  width: 50vw;
  height: 1em;
  padding: 0.3em 1em;
  margin: 1em auto 1.5em;
  font-size: 1.7em;
  color: #233e50;
  border: #233e50 3px solid;
}

#logoMain {
  width: 50%;
}

#logo {
  width: 25vw;
  margin: 10px auto;
}

::placeholder {
  color: rgb(0, 0, 0);
  opacity: 0.2; /* Firefox */
}

#footer-links {
  font-size: 1em;
  display: flex;
  justify-content: center;
  height: 0em;
}

#footer-links a {
  font-size: 1em;
  margin: 0 3em;
}

.footer-content {
  margin: 0 0;
  padding: 0 0;
}

#contact:hover {
  color: blue;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #233e50;
}

a:hover {
  color: blue;
}

footer img {
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 10vh;
  bottom: 0;
  z-index: -1;
}

.sheets-container {
  display: grid;
  /* grid-template-columns: auto auto; */
  grid-gap: calc(20px / 2);
  grid-template-columns: repeat(8, calc(50% - 20px * 2));
  padding: 0 20px;
  overflow-x: hidden;
  scroll-snap-type: x proximity;
  padding-bottom: calc(0.75 * 20px);
  margin-bottom: calc(-0.25 * 20px);
}

.sheet-item {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto;
  column-gap: 10px;
  row-gap: 15px;
  margin-right: 20px;
}

.sheet-column {
  display: grid;
  flex-direction: column;
  grid-template-columns: auto;
}

footer {
  display: grid;
  height: 10vh;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  bottom: 0;
  font-size: 2em;
}
</style>
