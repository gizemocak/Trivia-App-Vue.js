import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import Questions from "./Questions.vue";
import Answers from "./Answers.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/questions/:id",
      name: "Questions",
      component: Questions
    },
    {
      path: "/answers",
      name: "Answers",
      component: Answers
    }
  ]
});
