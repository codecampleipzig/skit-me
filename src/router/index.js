import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JoinRoom from "../views/JoinRoom.vue";
import Room from "../views/Room.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/join/:roomId",
    name: "JoinRoom",
    component: JoinRoom,
    props: true
  },
  {
    path: "/room/:roomId",
    name: "Room",
    component: Room,
    props: true,
    beforeEnter(to, from, next) {
      if (!store.state.room) {
        const userId = localStorage.getItem("userId");

        if (!userId) {
          next({ name: "JoinRoom", params: { roomId: to.params.roomId } });
        } else {
          store.dispatch("reconnectToRoom", userId);
        }
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
