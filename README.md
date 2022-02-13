# Vue.js 框架开发入门 ( 结合 Element UI ) 

> 本指南的目标人群在于希望快速上手 Vue 的开发的人群，此教程不深挖技术细节，

我们已经帮你搭好了大致的框架和示例，我们使用的是：

```json
"@element-plus/icons-vue": "^0.2.7",

"element-plus": "^1.3.0-beta.10",

"element-ui": "^2.15.7",

"vue": "^3.0.0",

"vue-router": "^4.0.12"
```

你可以从这里下载使用：[Github 仓库](https://github.com/NateYip/StartUpForVue)

<mark>**强烈建议配合代码使用**</mark>

怎么启动项目？

下载下来项目后首先输入 `npm i` 下载安装依赖，

完成后，使用 `npm run serve ` 运行项目，

打开` http://localhost:8080/#/` 就可以看到效果啦



## 铺垫

### 组件划分

一般来说，我们会这样划分我们的组件：容器组件和展示组件

> *如果下面的解释看不太懂，也没关系，先有个大致的印象*
>
> 展示组件（Presentational Component）：展示组件一般不需要关心数据该怎么处理，它会更专注于页面的 UI 布局、数据信息的展示，一般接收容器组件所传递的数据进行展示，所以不关心数据的传递和变动，很少会拥有自己的状态。
>
> 容器组件（Container Component）：容器组件提供数据和方法 ( 行为 ) 给展示组件或者展示组件，并且有自己的状态需要管理。

### 项目文件结构

现在，我们先来约定一下，我们开发时候的项目文件结构的大致划分：

*<mark>主体项目结构</mark>*

src

--- components   `多为展示组件`

--- pages   `多为容器组件`  

--- services   `网络异步请求api`

--- utils   `多为其他组件常用的工具类`

--- route.js   `项目路由结构`

--- themes   `样式文件`



*<mark>component下的文件结构</mark>*

exampleComponent

--- components  

--- index.ts / index.vue` 该文件多用于export该组件`

> component是展示组件，仅关注数据展示，其 components 下文件为该展示组件所需要的组件



*<mark>Pages下的文件结构</mark>*

examplePage

--- components

--- index.vue

单文件组件

这是 Vue 开发中的重要的概念，在 Vue 中，我们可以使用 `*.vue` 文件  (  即就是**SFC** ) 对我们的组件进行抽象，这样的好处是，我们在开发的时候，更好的解耦组件，并且我们可以更关注于单个组件的开发，下面是一个单文件组件的例子：

```vue
<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```

每个 `*.vue` 文件由三种类型的顶层代码块组成：`<template>`、`<script>` 与 `<style>`：

- `<template>` 部分定义了组件的模板。
- `<script>` 部分是一个标准的 JavaScript 模块。它应该导出一个 Vue 组件定义作为其默认导出。
- `<style>` 部分定义了与此组件关联的 CSS，使用 ` scoped` 字段可以使当前样式仅作用于这个组件。



## 路由是什么

在现代的 SAP 应用中，前端开始维护自己的路由表，正如 ` src\route.js` 这个文件所写的，路由表是一个树状结构，目前的路由只有两个，一个是 ` /` 一个是 `/props` ，他们所对应的页面将会展示在 `src\App.vue` 中第十行的 `<router-view/> `组件中， `<router-view/> `组件会展示什么，将会完全匹配你的  ` src\route.js` 这个文件所写的规则，就例如说，`/` 这个路由，就会匹配 `DataAndMethod` 这个组件，然后进行渲染。

那么另一个问题是什么？我们该怎么切换路由？这个我们可以自己写一个修改浏览器路径、监听浏览器路径、替换  `<router-view/>`展示的组件的一个函数，但是那将会花费大量时间，我们直接使用 UI 框架和 vue-router 整合好的一套路由框架。

例如 `src\components\Sider\index.vue` 中，这是我们的侧边栏的组件，我们在这里使用了 `<el-menu router/>` 这个组件，并在子组件中通过` <el-menu-item index="/">` 组件来修改浏览器路径的同时根据你的 ` src\route.js` 这个文件所写的规则去渲染相应的组件。



## UI 框架是什么

其实看了前面的内容，你应该大致理解了什么是 UI 框架，你如果还有疑惑不如看看 `src\pages\DataAndMethod\components\Counter\index.vue` 这个文件中的代码，或者你还可以自己上手试试，你就会知道一个 UI 框架在开发过程中的作用了。