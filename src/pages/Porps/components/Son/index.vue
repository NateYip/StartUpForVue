<template>
  <h1>Son</h1>
  <p>I am the Son ,I get the msg : {{ msg }}</p>
  <el-button type="primary" @click="sendMsgtoFather">
    click here to send a msg to father!
  </el-button>
</template>

<script>
export default {
  name: "Son",
  props: ["msg"],
  emits: ["getMsgFromSon"],
  data() {
    return {};
  },
  methods: {
    sendMsgtoFather() {
      // 父亲组件通过 $emit 传递值给父组件，
      //其中 emit 函数的第一个参数是父组件中要响应的函数，
      //第二个参数是传递给父组件所响应的函数的参数 (payload)
      this.$emit("getMsgFromSon", "I am your Son !");
    },
  },
};
</script>