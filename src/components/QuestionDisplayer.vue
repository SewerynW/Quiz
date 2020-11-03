<template>
  <article class="question-displayer">
    <h2>{{ `#${getNumberOfCurrentQuestion} - ${question.q}` }}</h2>

    <div class="question-displayer--answers">
      <span class="answer">
        <input
          type="radio"
          id="answerA"
          name="answer"
          :value="question.a[0]"
          v-model="pickedAnswer"
        />
        <label for="answerA">{{ question.a[0].content }}</label>
      </span>

      <span class="answer">
        <input
          type="radio"
          id="answerB"
          name="answer"
          :value="question.a[1]"
          v-model="pickedAnswer"
        />
        <label for="answerB">{{ question.a[1].content }}</label>
      </span>

      <span class="answer">
        <input
          type="radio"
          id="answerC"
          name="answer"
          :value="question.a[2]"
          v-model="pickedAnswer"
        />
        <label for="answerC">{{ question.a[2].content }}</label>
      </span>
    </div>

    <div class="btn">
      <button
        :class="{ 'btn--disabled': btnIsDisabled }"
        @click="onClickBtn"
        :disabled="btnIsDisabled"
      >
        {{ btnLabel }}
      </button>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "QuestionDisplayer",
  props: {
    question: {
      type: Object
    },
    end: {
      type: Boolean
    }
  },
  data() {
    return {
      pickedAnswer: null
    }
  },

  computed: {
    ...mapGetters(["getNumberOfCurrentQuestion"]),

    btnLabel() {
      return this.end ? "Finish" : "Next"
    },

    btnIsDisabled() {
      return this.pickedAnswer ? false : true
    }
  },

  methods: {
    ...mapMutations(["NEXT_QUESTION", "INCREASE_POINTS"]),

    onClickBtn() {
      this.checkAnswer()

      if (this.end) {
        this.$router.push("results")
        return
      }

      this.pickedAnswer = null
      this.NEXT_QUESTION()
    },

    checkAnswer() {
      if (this.pickedAnswer.isRight) {
        this.INCREASE_POINTS()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.question-displayer {
  border: 1px solid grey;
  border-radius: 10px;
  width: 80vw;
  box-shadow: 0px 0px 20px -1px #000000;
  background-color: #265f6a;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 25px;
  }

  &--answers {
    display: flex;
    flex-direction: column;
  }
}

.answer {
  margin-bottom: 25px;

  input:hover,
  label:hover {
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 0px;
  }
}

.btn {
  text-align: right;

  button {
    padding: 12px 20px;
    font-size: 14px;
    border: 1px solid #000;
    border-radius: 10px;
  }

  &--disabled {
    &:hover {
      cursor: not-allowed;
      box-shadow: none;
    }
  }
}
</style>
