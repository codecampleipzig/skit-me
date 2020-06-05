import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentStage: {
      name: "StartScreen"
    },
    gameParameters: null,
    results: []
  },
  mutations: {
    SET_NEXT_STAGE(state, stage) {
      //parameter stage is a stage object as defined in line 8
      state.currentStage = stage;
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
    startGame(ctx, gameParameters) {
      //gameParameters are set/comming in the component waiting room?TODO
      ctx.commit("SETUP_GAME", gameParameters);
      ctx.commit("SET_NEXT_STAGE", { name: "GameSeedPhase" });
    },
    completeSeed({ commit }, descriptionTitle) {
      commit("PUSH_NEW_RESULT", { type: "descriptionTitle", descriptionTitle });
      commit("SET_NEXT_STAGE", { name: "drawing", descriptionTitle });
    },
    completeDrawing(ctx, drawingURL) {
      //later from here we'll call a database witch the drawingURL to pass the drawing
      ctx.commit("PUSH_NEW_RESULT", { type: "drawing", drawingURL });
      ctx.commit("SET_NEXT_STAGE", { name: "writing", drawingURL });
    },
    completeWriting(ctx, descriptionTitle) {
      //later from here we'll call a database witch the drawingURL to pass the drawing
      ctx.commit("PUSH_NEW_RESULT", {
        type: "descriptionTitle",
        descriptionTitle
      });
      if (ctx.state.results.length < ctx.state.gameParameters.numRounds) {
        ctx.commit("SET_NEXT_STAGE", { name: "drawing", descriptionTitle });
      } else {
        ctx.commit("SET_NEXT_STAGE", { name: "GameEnd" });
      }
    }
  },
  modules: {}
});
