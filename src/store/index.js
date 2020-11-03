import Vue from "vue"
import Vuex from "vuex"

import questions from "@/questions/questions.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: "",
    numberOfCurrentQuestion: 1,
    allQuestions: questions.length,
    points: 0,
    questions
  },
  getters: {
    getUserName: state => state.userName,
    getPoints: state => state.points,
    getNumberOfCurrentQuestion: state => state.numberOfCurrentQuestion,
    getNumerAllQuestions: state => state.allQuestions,
    getAllQuestions: state => state.questions,
    getCurrentQuestion: state =>
      state.questions[state.numberOfCurrentQuestion - 1]
  },
  mutations: {
    SET_USER_NAME(state, name) {
      state.userName = name
    },
    INCREASE_POINTS(state) {
      state.points++
    },
    NEXT_QUESTION(state) {
      state.numberOfCurrentQuestion++
    },
    CLEAR_STATS(state) {
      state.points = 0
      state.numberOfCurrentQuestion = 1
    }
  },
  actions: {},
  modules: {}
})
