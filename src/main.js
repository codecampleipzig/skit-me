import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import io from "socket.io-client";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

const socket = io("http://172.30.9.32:1234");
socket.emit("hello", "from client");
socket.on("hello back", (data) => {
  console.log(data);
});
