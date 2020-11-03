<template>
  <div>
    <section class="section static static--one">
      <h1>
        Welcome in our crazy Quiz!
      </h1>
    </section>
    <section class="section parralax parralax--one"></section>
    <section class="section static static--two">
      <h1>
        You are only one step away from getting started,<br />
        Please let us know what is your name
      </h1>
      <input
        type="text"
        name="userName"
        id="userName"
        v-model="userName"
        placeholder="name..."
      />
    </section>
    <section class="section parralax parralax--two"></section>
    <section class="section static static--three">
      <h1>
        Awesome!<br />
        {{ `Nice to meet you ${userName}!` }} <br />
      </h1>
      <div class="static--three--start">
        <h1>Click the Button and start Quiz!</h1>
        <button @click="onClick">START</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      userName: ""
    }
  },

  methods: {
    onClick() {
      this.$store.commit("SET_USER_NAME", this.userName)
      this.$router.push("quiz")
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;

  h1 {
    text-align: center;
  }
}

.static {
  background-color: #fff;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;

  &--two,
  &--three {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  &--two {
    #userName {
      font-size: 10px;
      padding: 4px 5px;
      border: 1px solid grey;
      border-radius: 5px;
      text-align: center;
    }
  }

  &--three {
    &--start {
      text-align: center;

      button {
        font-size: 18px;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 3px 7px;
        margin-top: 30px;
      }
    }
  }
}

.parralax::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 70%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: -2;
}

.parralax::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: translateZ(-1px) scale(1.5);
  z-index: -1;
}

.parralax--one::after {
  background-image: url("../assets/img/quiz-2.png");
}

.parralax--two::after {
  background-image: url("../assets/img/brain.jpg");
}

@media (min-width: 265px) {
  .section {
    font-size: 20px;
  }
}

@media (min-width: 600px) {
  .section {
    height: 40vh;
  }

  .static {
    &--two {
      #userName {
        font-size: 28px;
        padding: 8px 10px;
        border: 2px solid grey;
      }
    }

    &--three {
      &--start {
        button {
          font-size: 28px;
          border: 2px solid grey;

          padding: 6px 14px;
          margin-top: 30px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .section {
    height: 50vh;
    font-size: 30px;
  }

  .parralax::after {
    transform: translateZ(-1px) scale(2);
  }
}

@media (min-width: 1300px) {
  .section {
    font-size: 40px;
  }
}
</style>
