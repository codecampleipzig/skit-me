import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import io from "socket.io-client";

const socket = io(process.env.VUE_APP_API_URL);

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentStage: {
      name: "StartScreen"
    },
    room: null
  },
  mutations: {
    SET_NEXT_STAGE(state, stage) {
      //parameter stage is a stage object as defined in line 8
      state.currentStage = stage;
      console.log(state.currentStage);
    },
    SET_ROOM(state, room) {
      state.room = room;
    }
  },
  actions: {
    async startGame() {
      const res = await axios.post(`${process.env.VUE_APP_API_URL}/rooms`);
      console.log(res.data);
      router.push({ name: "JoinRoom", params: { roomId: res.data.roomId } });
    },
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
    signalReady() {
      socket.emit("signalReady");
    },
    completeSeed(ctx, descriptionTitle) {
      socket.emit(
        "completeWriting",
        descriptionTitle,
        ctx.state.currentStage.sheetId
      );
    },
    completeDrawing(ctx, drawingURL) {
      socket.emit(
        "completeDrawing",
        drawingURL,
        ctx.state.currentStage.sheetId
      );
    },
    completeWriting(ctx, descriptionTitle) {
      socket.emit(
        "completeWriting",
        descriptionTitle,
        ctx.state.currentStage.sheetId
      );
    },
    restartGame(ctx) {
      ctx.commit("SET_NEXT_STAGE", { name: "PlayerLobby" });
    }
  }
});

socket.on("roomUpdate", room => {
  store.dispatch("roomUpdate", room);
});

socket.on("startSeed", sheetId => {
  store.commit("SET_NEXT_STAGE", {
    name: "GameSeedPhase",
    sheetId
  });
});

socket.on("startDrawing", (descriptionTitle, sheetId) => {
  store.commit("SET_NEXT_STAGE", {
    name: "DrawingPhase",
    descriptionTitle,
    sheetId
  });
});

socket.on("startWriting", (drawingURL, sheetId) => {
  store.commit("SET_NEXT_STAGE", {
    name: "WritingPhase",
    drawingURL,
    sheetId
  });
});

socket.on("endGame", (results, sheets) => {
  store.commit("SET_NEXT_STAGE", {
    name: "GameEndPhase",
    results,
    sheets
  });
});
export default store;
