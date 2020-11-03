<template>
  <div class="container">
    <section>
      <h1>{{ getUserName }} :)</h1>
      <p>Numer of all Questions: {{ getNumerAllQuestions }}</p>
      <p>You answered correctly to {{ getPoints }} questions</p>
      <p v-if="getPoints <= 3">You are better then 30% of our quizers</p>
      <p v-if="getPoints < 6 && getPoints > 3">
        You are better then 60% of our quizers
      </p>
      <p v-if="getPoints === getNumerAllQuestions">
        You are amazing! you are one of the best quizers
      </p>
      <button @click="onClick">Start quiz again</button>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "Results",
  computed: {
    ...mapGetters(["getPoints", "getUserName", "getNumerAllQuestions"])
  },
  methods: {
    onClick() {
      this.$store.commit("CLEAR_STATS")
      this.$router.push("quiz")
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  height: 60vh;
  width: 80vw;
  background-color: #4f4134;
  box-shadow: 0px 0px 20px -1px #000000;
  border-radius: 10px;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }

  button {
    margin-top: 100px;
    padding: 8px 12px;
  }
}
</style>
