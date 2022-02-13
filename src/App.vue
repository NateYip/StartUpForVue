<template>
  <div class="common-layout">
    <el-container>
        <el-header>I am Header</el-header>
        <el-container>
          <el-aside width="200px">
            <Sider/>
          </el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>
<script>
import Sider from "./components/Sider"
export default {
  name: 'App',
  components:{
    Sider ,
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped>

.common-layout .el-header{
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  height: 60px;
}

.common-layout .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  height:calc(100vh - 60px);
  line-height: 60px;
}

.common-layout .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  height: calc(100vh - 60px);
  line-height: 60px;
}

.common-layout > .el-container {
  margin-bottom: 40px;
}

</style>