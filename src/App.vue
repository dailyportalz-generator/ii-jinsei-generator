<template>
  <div id="app">
    <!-- <h1
      v-if="step === 0"
    >
    いい人生ジェネレーター
    </h1>
    <GoodLifeHeader
      v-if="step === 0"
    /> -->
    <InputQuestion
      v-if="step === 0"
      key="start"
      @start="handleStart"
    />
    <GoodLifeResult
      key="next"
      v-if="step === 1"
      @next="handleNext"
      :name="name"
      :age="age"
    />
  </div>
</template>

<script>
// import GoodLifeHeader from "./components/GoodLifeHeader.vue";
import InputQuestion from "./components/InputQuestion.vue";
import GoodLifeResult from "./components/GoodLifeResult.vue";

export default {
  name: "app",
  components: {
    // GoodLifeHeader,
    InputQuestion,
    GoodLifeResult
  },
  data() {
    return {
      step: 0,
      age: 11,
      name: ''
      };
  },
  // mounted() {
  //   //result画面を表示
  //   const params = parse(location.search.replace("?", ""));
  //   const isValid = [
  //     "name",
  //     "title",
  //     "q1",
  //     "q2",
  //     "q3",
  //     "q4",
  //     "q5",
  //     "q6"
  //   ].every(val => {
  //     if (!params[val]) {
  //       return false;
  //     }
  //     if (val != "name" && parseInt(params[val]) < 1) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   if (isValid) {
  //     const questions = {
  //       name: params.name,
  //       title: parseInt(params.title),
  //       q1: parseInt(params.q1),
  //       q2: parseInt(params.q2),
  //       q3: parseInt(params.q3),
  //       q4: parseInt(params.q4),
  //       q5: parseInt(params.q5),
  //       q6: parseInt(params.q6)
  //     };
  //     this.questions = questions;
  //     this.step = 7;
  //   }
  // },
  methods: {
    handleStart(startData) {
      this.name = startData.name
      this.step++
    },
    handleNext() {
      if(this.age === 70){
        this.age = 24
      } else {
        this.age++
      }
    }
  },
  computed: {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>