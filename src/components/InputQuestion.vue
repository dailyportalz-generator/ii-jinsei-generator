<template>
  <form @submit.prevent="handleSubmit()" class="input-question">
    <dl>
      <dd>
        <input v-model="name" type="text">
      </dd>
    </dl>
    <button>いい人生をスタート</button>
    <p>うそでもいいですが、本名のほうが嬉しいと思います。 （名前はサーバに保存してません）</p>
    <p>ランダムに文章を出しているので、ときどき同じ文章が出てしまいます。それは見なかったことにしてください。</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      title: 1
    };
  },
  methods: {
    handleSubmit() {
      if(this.name === "") this.name = "おまえ"
      this.$emit("start", { name: this.name});
    }
  }
};
</script>

<style scoped>
.input-question {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: dotted 1px #c6c6c6;
}

h3 {
  font-size: 1em;
}

dd {
  margin: 16px 0 0;
  padding: 0 0 8px 0;
}

button {
  width: 60px;
}

input[type="text"] {
  margin-right: 20px;
}
</style>