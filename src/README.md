![LOGO](http://22.11.38.153/BFE/BFE/raw/develop/docs/BFE-LOGO/%E6%A8%AA%E7%89%88@2x.png)
# pro

> 平台 项目

使用Vue开发的前端框架

技术栈
- vue2.x
- vue-router
- vuex
- axios
- [bfe-ui](http://22.11.38.153:81/bfe-ui/)
- stylus

## 安装编译步骤

``` bash
# 安装依赖
npm install
# serve with hot reload at localhost:2000
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# build webpack.dll
npm run build:dll
# run e2e test
npm run e2e
# run unit test
npm run unit
# run both e2e test and unit test
npm run test
```

## 模拟返回 Mock 数据使用方法
Mock是用来模拟后台返回数据的，用于在后台环境不具备时调试前端代码。利用Mockjs可以自动拦截前端请求，并返回模拟数据。无需修改业务代码即可做到无痛切换。
### 开启 Mock 方式
修改`src/main.js`
放开如下代码

```javascript
//添加mockjs拦截请求，模拟数据返回
import mock from './mock'
```
### 关闭 Mock
将上面的代码注释掉

### 添加挡板数据
1. 在`src/mock`文件夹下新增挡板文件，命名为`mock.{数据名称}.js`
2. 添加数据，可参考`src/mock/mock.user.js`文件
3. 修改`src/mock/index.js`,对新增的挡板文件增加`import`引用，然后新增调用 `addToMock()`方法


## router 路由配置方法

待补充

## 编码规范

### 基于模块开发
始终基于模块的方式来构建你的 app，每一个子模块只做一件事情。
Vue.js 的设计初衷就是帮助开发者更好的开发界面模块。一个模块是应用程序中独立的一个部分。
每一个 Vue 组件(等同于模块)首先必须专注于解决一个单一的问题，独立的, 可复用的, 微小的 and 可测试的。
如果你的组件做了太多的事或是变得臃肿，请将其拆分成更小的组件并保持单一的原则。一般来说，尽量保证每一个文件的代码行数不要超过 100 行。也请保证组件可独立的运行。比较好的做法是增加一个单独的 demo 示例。

### Vue 组件命名
组件的命名需遵从以下原则：
* 有意义的: 不过于具体，也不过于抽象
* 简短: 2 到 3 个单词
* 具有可读性: 以便于沟通交流
* 必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字
* 命名空间
比如：

``` html
<!-- 推荐 -->
<app-header></app-header>
<user-list></user-list>
<range-slider></range-slider>

<!-- 避免 -->
<btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
<ui-slider></ui-slider> <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
<slider></slider> <!-- 与自定义元素规范不兼容 -->
```

### 组件结构化
* 按首字母排序properties, data, computed, watches 和 methods使得这些对象内的属性便于查找。
* 使用 name 属性。借助于vue devtools可以让你更方便的测试

比如：

```html
<template lang="html">
	<div class="Ranger__Wrapper">
		<!-- ... -->
	</div>
</template>

<script type="text/javascript">
  export default {
		// 不要忘记了 name 属性
    name: 'RangeSlider',
    // 组合其它组件
    extends: {},
    // 组件属性、变量
    props: {
			bar: {}, // 按字母顺序
			foo: {},
			fooBar: {},
		},
    // 变量
    data() {},
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {},
    // 生命周期函数
    beforeCreate() {},
    mounted() {},
};
</script>

<style scoped>
  .Ranger__Wrapper { /* ... */ }
</style>
```

### 组件 props 原子化
虽然 Vue.js 支持传递复杂的 JavaScript 对象通过 props 属性，但是你应该尽可能的使用原始类型的数据。尽量只使用JavaScript 原始类型(字符串、数字、布尔值) 和 函数。尽量避免复杂的对象。

## 验证组件的 props
组件 props 通过自定义标签的属性来传递。属性的值可以是 Vue.js 字符串(:attr="value" 或 v-bind:attr="value")或是不传。你需要保证组件的 props 能应对不同的情况。
* 提供默认值
* 使用 type 属性校验类型
* 使用 props 之前先检查该 prop 是否存在
比如：

``` html
<template>
  <input type="range" v-model="value" :max="max" :min="min">
</template>
<script type="text/javascript">
  export default {
    props: {
      max: {
        type: Number, // 这里添加了数字类型的校验
        default() { return 10; },
      },
      min: {
        type: Number,
        default() { return 0; },
      },
      value: {
        type: Number,
        default() { return 4; },
      },
    },
  };
</script>
```
