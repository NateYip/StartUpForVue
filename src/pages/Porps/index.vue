<template>
  <h2>Porps</h2>
  <el-alert
    title="这里的大多数的教程就在代码的注释里，父子组件传值是 \
    开发中非常重要的事情，因为组件之间的解耦，使我们不得不创建\
    很多相互嵌套的组件，所以，弄清楚父子组件的传值方式，是一件很重要的事情,\
    父子组件传值，一句话概括一下的话，就是: 父传子用 props ，子传父用 emit"
    type="info"
    :closable="false"
  />
  <Father />
</template>

<script>
import Father from "./components/Father";
export default {
  name: "Porps",
  components: {
    Father,
  },
};
</script>