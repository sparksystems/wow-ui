# 快速开始

----

## 使用前准备

> 使用之前，推荐先学习 `Vue` 和 `ES2015` ，并要正确配置 `Node.js` （v6.x 或以上版本）

`WOW-UI` 是基于 `Vue.js` 2.x 版本开发的，所以有必要了解以下基础知识：
- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

## 基于模板工程开发

> `Vue.js` 提供一个官方命令行工具 `vue-cli`，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。
> *假设：在 Windows 下进行开发*
```bash
> npm i -g vue-cli
> md my-project
> cd my-project
> vue init webpack
> npm i
> npm i element-ui
```

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

### 全局组件的使用

可在项目的入口文件中引入所有组件或指定组件

```js
import WowUI from 'wowui' // 引入组件库
import '../node_modules/wowui/packages/theme/lib/index.css' // 引入样式库

Vue.use(WowUI)
```

### 单个组件的按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { WButton } from 'wowui'

export default {
  components: {
    WButton
  }
}
```

在模板中用 `<w-button></w-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <w-button>这是一个按钮</w-button>
  </div>
</template>
```

## 自定义主题

`WOW-UI` 各个组件的样式变量都存放在 `wowui/packages/theme/common/var.css` 文件中。
> 用户可根据实际需要，自定义组件的样式
