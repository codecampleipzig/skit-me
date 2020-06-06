import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
import io from "socket.io-client";

const socket = io("http://localhost:1234");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentStage: {
      name: "StartScreen",
    },
    gameParameters: null,
    roomId: 3,
    results: [],
  },
  mutations: {
    SET_NEXT_STAGE(state, stage) {
      //parameter stage is a stage object as defined in line 8
      state.currentStage = stage;
    },
    SET_ROOM_ID(state, roomId) {
      state.roomId = roomId;
    },
    SETUP_GAME(state, gameParameters) {
      //parameter stage is a stage object as defined in line 8
      state.gameParameters = gameParameters;
      state.results = [];
    },
    PUSH_NEW_RESULT(state, result) {
      //result data coming from the last stage either sentence or drawingURL
      state.results.push(result);
    },
  },
  actions: {
    joinRoom(ctx, { roomId, userName }) {
      socket.emit("joinRoom", { userName, roomId }, (response) => {
        console.log(response);
        router.push({ name: "Room", params: { roomId } });
      });
      //send joinRoom event through socket to server, display waiting bar, wait for response from server
    },
    restartGame(ctx) {
      ctx.commit("SET_NEXT_STAGE", { name: "StartScreen" });
    },
    async startGame() {
      const res = await axios.post("http://localhost:1234/rooms");
      console.log(res.data);
      router.push({ name: "JoinRoom", params: { roomId: res.data.roomId } });
    },
    completePlayerLobby(ctx) {
      ctx.commit("SET_NEXT_STAGE", { name: "GameSeedPhase" });
    },

    completeSeed({ commit }, descriptionTitle) {
      commit("PUSH_NEW_RESULT", { type: "descriptionTitle", descriptionTitle });
      commit("SET_NEXT_STAGE", { name: "DrawingPhase", descriptionTitle });
    },
    completeDrawing(ctx, drawingURL) {
      //later from here we'll call a database witch the drawingURL to pass the drawing
      ctx.commit("PUSH_NEW_RESULT", { type: "drawing", drawingURL });
      if (ctx.state.results.length < ctx.state.gameParameters.numRounds) {
        ctx.commit("SET_NEXT_STAGE", {
          name: "WritingPhase",
          drawingURL,
        });
      } else {
        ctx.commit("SET_NEXT_STAGE", { name: "GameEndPhase" });
      }
    },
    completeWriting(ctx, descriptionTitle) {
      //later from here we'll call a database witch the drawingURL to pass the drawing
      ctx.commit("PUSH_NEW_RESULT", {
        type: "descriptionTitle",
        descriptionTitle,
      });
      if (ctx.state.results.length < ctx.state.gameParameters.numRounds) {
        ctx.commit("SET_NEXT_STAGE", {
          name: "DrawingPhase",
          descriptionTitle,
        });
      } else {
        ctx.commit("SET_NEXT_STAGE", { name: "GameEndPhase" });
      }
    },
  },
  modules: {},
});
