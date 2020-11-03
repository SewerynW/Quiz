<template>
  <section class="quiz">
    <header>
      <h1>Good Luck {{ getUserName }}!</h1>
    </header>
    <main>
      <question-displayer :question="getCurrentQuestion" :end="isEnd" />
    </main>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

import Questions from "@/questions/questions.js"
import QuestionDisplayer from "@/components/QuestionDisplayer.vue"

export default {
  name: "Quiz",
  components: {
    QuestionDisplayer
  },
  data() {
    return {
      Questions
    }
  },

  computed: {
    ...mapGetters([
      "getUserName",
      "getNumberOfCurrentQuestion",
      "getNumerAllQuestions",
      "getCurrentQuestion"
    ]),

    isEnd() {
      return this.getNumberOfCurrentQuestion === this.getNumerAllQuestions
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  margin-bottom: 100px;
}
</style>
