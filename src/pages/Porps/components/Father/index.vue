<template>
  <h1>Father</h1>
  <p>I am Father, I will send a msg to Son</p>
  <el-button type="primary" @click="Send">
    Click here to send my son a msg!
  </el-button>
  <p>I get msg From Son : {{ msgFromSon }}</p>
  <!-- 子组件这里要监听子组件内 emit 的第一个参数，并触发父组件中的相应的函数 ( 即这里的 readMsg )-->
  <Son :msg="msg" @getMsgFromSon="readMsg" />
</template>

<script>
import Son from "../Son";

export default {
  name: "Home",
  components: {
    Son,
  },
  data() {
    return {
      msg: "",
      msgFromSon: "",
    };
  },
  methods: {
    Send() {
      this.msg = "I am your Dady!";
    },
    //这里的 payload 就是子组件的 emit 函数中的第二个参数
    readMsg(payload) {
      this.msgFromSon = payload;
    },
  },
};
</script>
