<template>
  <el-col style="width: 100%">
    <h5 class="mb-2">Aside Menu</h5>
    <el-menu router>
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <span>数据和方法</span>
      </el-menu-item>
      <el-menu-item index="/props">
        <el-icon><icon-menu /></el-icon>
        <span>怎么传值</span>
      </el-menu-item>
      <!-- <el-menu-item 
                index= 'vifandvfor'
            >
                <el-icon><icon-menu /></el-icon>
                <span>条件渲染和循环渲染</span>
            </el-menu-item> -->
    </el-menu>
  </el-col>
</template>

<script>
import { Menu as IconMenu } from "@element-plus/icons-vue";
export default {
  name: "Sider",
  components: {
    IconMenu,
  },
};
</script>

<style scoped>
</style>