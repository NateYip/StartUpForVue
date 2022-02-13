<template>
  <el-row :span="12">
    <el-col :span="4">
      <el-button type="primary" @click="add">
        Add<el-icon class="el-icon--right"><plus /></el-icon>
      </el-button>
    </el-col>
    <el-col :span="4"> 现在数字是: {{ counter }} </el-col>
    <el-col :span="4">
      <el-button type="primary" @click="minus">
        Minus<el-icon class="el-icon--right"><minus /></el-icon>
      </el-button>
    </el-col>
  </el-row>
  <p>
    下面这个也是一个计数器，但它是直接使用 UI 框架中提供的组件,
    我们只需要设定一些属性，就可以得到我们想要的组件，因此 UI
    框架会使我们的开发效率 极大的提升，这也是为什么我们需要使用 UI 框架
  </p>
  <el-input-number v-model="counter"/>
  <el-alert
    title="注意! 这里我们使用的 v-model 进行的双向绑定，而不是 v-bind \
    你会发现，修改下面的数字，上面的数字也会改变 \
  所谓的双向绑定，以这个例子来讲，就是说 view 层的 input 框内的值改变，可以影响到 \
  data 层的 this.counter 的变化，同样的，data层的 this.counter 的变化也会影响到 view层 input框的值"
    type="info"
    :closable="false"
  />
</template>

<script>
import { Plus, Minus } from "@element-plus/icons-vue";
export default {
  name: "Counter",
  components: {
    Plus,
    Minus,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    minus() {
      this.counter--;
    },
  },
};
</script>