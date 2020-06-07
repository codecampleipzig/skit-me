import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import io from "socket.io-client";

const socket = io("http://localhost:1234");

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentStage: {
      name: "StartScreen"
    },
    gameParameters: null,
    results: [],
    room: null
  },
  mutations: {
    SET_NEXT_STAGE(state, stage) {
      //parameter stage is a stage object as defined in line 8
      state.currentStage = stage;
    },
    SET_ROOM(state, room) {
      state.room = room;
    },

    SETUP_GAME(state, gameParameters) {
      //parameter stage is a stage object as defined in line 8
      state.gameParameters = gameParameters;
      state.results = [];
    },
    PUSH_NEW_RESULT(state, result) {
      //result data coming from the last stage either sentence or drawingURL
      state.results.push(result);
    }
  },
  actions: {
    async startGame() {
      const res = await axios.post("http://localhost:1234/rooms");
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
      socket.emit("completeWriting", descriptionTitle);
    },
    completeDrawing(ctx, drawingURL) {
      //later from here we'll call a database witch the drawingURL to pass the drawing
      ctx.commit("PUSH_NEW_RESULT", { type: "drawing", drawingURL });
      if (ctx.state.results.length < ctx.state.gameParameters.numRounds) {
        ctx.commit("SET_NEXT_STAGE", {
          name: "WritingPhase",
          drawingURL
        });
      } else {
        ctx.commit("SET_NEXT_STAGE", { name: "GameEndPhase" });
      }
    },
    completeWriting(ctx, descriptionTitle) {
      //later from here we'll call a database witch the drawingURL to pass the drawing
      ctx.commit("PUSH_NEW_RESULT", {
        type: "descriptionTitle",
        descriptionTitle
      });
      if (ctx.state.results.length < ctx.state.gameParameters.numRounds) {
        ctx.commit("SET_NEXT_STAGE", {
          name: "DrawingPhase",
          descriptionTitle
        });
      } else {
        ctx.commit("SET_NEXT_STAGE", { name: "GameEndPhase" });
      }
    },
    restartGame(ctx) {
      ctx.commit("SET_NEXT_STAGE", { name: "StartScreen" });
    }
  }
});

socket.on("roomUpdate", room => {
  store.dispatch("roomUpdate", room);
});

socket.on("startSeed", () => {
  store.commit("SET_NEXT_STAGE", {
    name: "GameSeedPhase"
  });
});

socket.on("startDrawing", descriptionTitle => {
  store.commit("SET_NEXT_STAGE", {
    name: "DrawingPhase",
    descriptionTitle
  });
});
export default store;
