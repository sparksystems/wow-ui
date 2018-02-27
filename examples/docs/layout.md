# 布局 Layout

---

### 概述
栅格化设计是按照一定的规则把页面行分成多列、组合的风格，以便于在进行页面呈现的时候能够快速的进行布局。一般传统的12栅格系统在移动手机端并不适用，本设计使用按百分比进行分栏的 弹性布局 系统。

### 基础 Flex 布局

用于分栏的百分比是 0～100 的等差数列：<br>
- 默认值 0：以当前分栏内文字的长度作为分栏的实际宽度；
- 5、10、15、... 85、95、100：占比宽度。
<div class="message">
 <w-row>
   <w-col :width="0"><div class="grid-content bg-purple text-center">0</div></w-col>
   <w-col :width="0"><div class="grid-content bg-purple-dark text-center">不定百分比</div></w-col>
   <w-col :width="0"><div class="grid-content bg-purple text-center">文字长度决定分栏宽度</div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :width="25"><div class="grid-content bg-purple text-center">25%</div></w-col>
   <w-col :width="25"><div class="grid-content bg-purple-dark text-center">25%</div></w-col>
   <w-col :width="25"><div class="grid-content bg-purple text-center">25%</div></w-col>
   <w-col :width="25"><div class="grid-content bg-purple-dark text-center">25%</div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :width="20"><div class="grid-content bg-purple text-center">20%</div></w-col>
   <w-col :width="25"><div class="grid-content bg-purple-light text-center">25%</div></w-col>
   <w-col :width="55"><div class="grid-content bg-purple text-center">55%</div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :width="5"><div class="grid-content bg-purple">5</div></w-col>
   <w-col :width="10"><div class="grid-content bg-purple-light">10</div></w-col>
   <w-col :width="25"><div class="grid-content bg-purple">25</div></w-col>
   <w-col :width="10"><div class="grid-content bg-purple-light">10</div></w-col>
   <w-col :width="20"><div class="grid-content bg-purple">20</div></w-col>
   <w-col :width="30"><div class="grid-content bg-purple-light">30</div></w-col>
 </w-row>
</div>

::: message
```html

<w-row>
  <w-col :width="25"><div class="grid-content bg-purple text-center">25%</div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple-dark text-center">25%</div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple text-center">25%</div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple-dark text-center">25%</div></w-col>
</w-row>
<w-row class="m-10">
  <w-col :width="20"><div class="grid-content bg-purple text-center">20%</div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple-light text-center">25%</div></w-col>
  <w-col :width="55"><div class="grid-content bg-purple text-center">55%</div></w-col>
</w-row>
<w-row class="m-10">
  <w-col :width="5"><div class="grid-content bg-purple">5</div></w-col>
  <w-col :width="10"><div class="grid-content bg-purple-light">10</div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple">25</div></w-col>
  <w-col :width="10"><div class="grid-content bg-purple-light">10</div></w-col>
  <w-col :width="20"><div class="grid-content bg-purple">20</div></w-col>
  <w-col :width="30"><div class="grid-content bg-purple-light">30</div></w-col>
</w-row>

```
:::

### 分栏间隔

分栏之间存在间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。

<div class="message">
  <w-row :gutter="20">
    <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
    <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
    <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
    <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

::: message

```html

<w-row :gutter="20">
  <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
  <w-col :width="25"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 分栏偏移

支持偏移指定的栏数。通过制定 col 组件的 ```offset``` 属性可以指定分栏偏移的百分比。

<div class="message">
  <w-row :gutter="20">
    <w-col :width="35"><div class="grid-content bg-purple"></div></w-col>
    <w-col :width="35" :offset="30"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :width="25" :offset="25"><div class="grid-content bg-purple"></div></w-col>
    <w-col :width="25" :offset="25"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
  <w-row :gutter="20" class="m-10">
    <w-col :width="50" :offset="25"><div class="grid-content bg-purple"></div></w-col>
  </w-row>
</div>

::: message

```html

<w-row :gutter="20">
  <w-col :width="35"><div class="grid-content bg-purple"></div></w-col>
  <w-col :width="35" :offset="30"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :width="25" :offset="25"><div class="grid-content bg-purple"></div></w-col>
  <w-col :width="25" :offset="25"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row :gutter="20" class="m-10">
  <w-col :width="50" :offset="25"><div class="grid-content bg-purple"></div></w-col>
</w-row>

```

:::

### 行属性 Row Attributes

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|gutter|栅格间隔距离|number|任意|0|
|tag|自定义元素标签|string|无|div|

### 列属性 Col Attributes
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|width|栅格列百分比|number|5, 10, 15, ... 95, 100|0|
|offset|栅格左侧百分比|number|任意|0|
|tag|自定义元素标签|string|无|div|
