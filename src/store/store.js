import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    questions: {}
  },
  mutations: {
    addQuestions(state, questions) {
      state.questions = questions;
    }
  },
  actions: {
    fetchQuestions({ commit }) {
      return fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      )
        .then(resp => resp.json())
        .then(resp => {
          commit("addQuestions", resp.results);
        });
    }
  },
  getters: {
    getQuestion: state => id => {
      return state.questions[id];
    }
  }
});
