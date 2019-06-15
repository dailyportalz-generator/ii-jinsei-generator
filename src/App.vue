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
import { parse } from 'querystring'
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
  mounted() {
    //result画面を表示
    const params = parse(location.search.replace("?", ""));
    const isValid = [
      "name",
      "age"
    ].every(val => {
      if (!params[val]) {
        return false;
      }
      if (val != "name" && parseInt(params[val]) < 1) {
        return false;
      }
      return true;
    });
    if (isValid) {
      this.name = params.name
      this.age = parseInt(params.age)
      this.step = 1;
    }
  },
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
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000;
  /* margin-top: 60px; */
}
</style>
