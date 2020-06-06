import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JoinRoom from "../views/JoinRoom.vue";
import Room from "../views/Room.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/join/:roomId",
    name: "JoinRoom",
    component: JoinRoom,
    props: true,
  },
  {
    path: "/room/:roomId",
    name: "Room",
    component: Room,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
