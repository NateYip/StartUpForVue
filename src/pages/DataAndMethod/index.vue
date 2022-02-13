<template>
    <div>
        <h2>模板语法</h2>
        <p>Vue 使用的是 Mustache 模板语法，即就是使用双大括号来实现数据的绑定</p>
        <el-alert 
            title='Tips: 修改 src\\pages\\DataAndMethod\\index.vue 中 \
            <script/> 标签内 data() 中的 name 字段来显示自己的名字' 
            type="info" 
            :closable="false"
        />
        <p>我的名字是: {{name}} </p>
        <el-alert 
            :title='tipContext'
            type="info" 
            :closable="false"
        />
        <p>
            注意观察上下两个 Tips 中 title 属性的区别，第一个 el-alert 标签中 title 属性前没有 ':' ,第二个标签 el-alert 
            前有冒号，这是因为 Mustache 语法不能在 HTML attribute 中使用，然而，可以使用 v-bind 指令，而 ':' 是 v-bind 语法的
            简写，同样的有 v-on 的简写是 '@'
        </p>
        <h2>Method</h2>
        <p style="display:inline-block">现在我们来实现一个计数器: </p>
        <p>通过绑定将事件绑定在组件上，我们可以实现监听事件,在函数中，我们通过 this 去指向当前实例，然后操作 data 中的数据，
            我们将在 methods 字段中，定义我们的函数，具体示例可以参考代码。
        </p>
        <!-- 这里引入了组件，去对应组件的文件中看具体细节吧 -->
        <Counter/>
        <p>以上就是基本的数据的操作</p>
    </div>
</template>

<script>
import Counter from './components/Counter'
export default {
    name:'DataAndMethod',
    components:{
        Counter
    },
    data() {
        return {
            tipContext : 'Tips: 修改 src\\pages\\DataAndMethod\\index.vue 中 \
            <script/> 标签内 data() 中的 tipContext 字段来修改这里的提示文字',
            name: "",
            counter : 0
        }
    },
   
}
</script>