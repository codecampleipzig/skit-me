import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import io from "socket.io-client";

const socket = io("http://172.30.9.85:1234");

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentStage: {
      name: "StartScreen"
    },
    gameParameters: null,
    results: [],
    room: null,
    waiting: false
  },
  mutations: {
    SET_NEXT_STAGE(state, stage) {
      //parameter stage is a stage object as defined in line 8
      state.currentStage = stage;
      state.waiting = false;
    },
    SET_ROOM(state, room) {
      state.room = room;
    },
    SET_WAITING(state, isWaiting) {
      state.waiting = isWaiting;
    },
    SETUP_GAME(state, gameParameters) {
      //parameter stage is a stage object as defined in line 8
      state.gameParameters = gameParameters;
      state.results = [];
    },
    SET_RESULTS(state, results) {
      state.results = results;
    }
  },
  actions: {
    joinRoom(ctx, { roomId, userName }) {
      socket.emit("joinRoom", { userName, roomId }, response => {
        console.log(response);
        if (response.error) {
          console.error(response.error);
          return;
        }
        ctx.commit("SET_ROOM", response.room);
        ctx.commit("SET_NEXT_STAGE", { name: "PlayerLobby" });
        router.push({ name: "Room", params: { roomId } });
      });
    },
    roomUpdate(ctx, room) {
      ctx.commit("SET_ROOM", room);
    },
    restartGame(ctx) {
      ctx.commit("SET_NEXT_STAGE", { name: "StartScreen" });
    },
    async startGame() {
      const res = await axios.post("http://localhost:1234/rooms");
      console.log(res.data);
      router.push({ name: "JoinRoom", params: { roomId: res.data.roomId } });
    },
    signalReady(ctx) {
      socket.emit("ready");
      ctx.commit("SET_WAITING", true);
    },
    completePlayerLobby(ctx) {
      ctx.commit("SET_NEXT_STAGE", { name: "GameSeedPhase" });
    },
    completeSeed({ commit }, descriptionTitle) {
      commit("SET_WAITING", true);
      socket.emit("completeWriting", descriptionTitle);
    },
    startDrawing(ctx, descriptionTitle) {
      ctx.commit("SET_NEXT_STAGE", { name: "DrawingPhase", descriptionTitle });
    },
    completeDrawing(ctx, drawingURL) {
      ctx.commit("SET_WAITING", true);
      socket.emit("completeDrawing", drawingURL);
    },
    startWriting(ctx, drawingURL) {
      ctx.commit("SET_NEXT_STAGE", {
        name: "WritingPhase",
        drawingURL
      });
    },
    completeWriting(ctx, descriptionTitle) {
      ctx.commit("SET_WAITING", true);
      socket.emit("completeWriting", descriptionTitle);
    },
    endGame(ctx, results) {
      ctx.commit("SET_RESULTS", results);
      ctx.commit("SET_NEXT_STAGE", {
        name: "GameEndPhase"
      });
    }
  },
  modules: {}
});

socket.on("roomUpdate", room => {
  store.dispatch("roomUpdate", room);
});

socket.on("startGame", () => {
  store.dispatch("completePlayerLobby");
});

socket.on("startDrawing", descriptionTitle => {
  store.dispatch("startDrawing", descriptionTitle);
});

socket.on("startWriting", drawingURL => {
  store.dispatch("startWriting", drawingURL);
});

socket.on("endGame", results => {
  store.dispatch("endGame", results);
});

export default store;
