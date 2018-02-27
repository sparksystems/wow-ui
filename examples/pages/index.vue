<template>
  <div class="pg-index">
    <div class="index-container">
      <img src="../assets/img/logo.png">
      <p>轻量级、模块化的移动端组件库</p>
    </div>
    <div class="panel">
      <div class="about">
        <router-link :to="{name: 'guide'}">开始 Start</router-link>
        <a target="_blank" class="btn-github" href="https://github.com/sparksystems/wow-ui">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .pg-index {
    .index-container {
      margin: 0;
      padding: 0;
      width: 100%;
      display: block;
      position: relative;
      text-align: center;
      padding: 0 0 100px;
      p {
        width: 100%;
        display: block;
        color: #999;
        font-size: 22px;
      }
    }
    .panel {
      position: relative;
      .about {
        position: absolute;
        width: 100%;
        height: 200px;
        top: 20px;
        z-index: 9;
        background: #fff;
        text-align: center;
        a {
          color: #fff;
          background-image: linear-gradient(#3da 0%, #196 100%);
          box-shadow: 0 2px 6px 0 rgba(102,102,102,0.5);
          display: inline-block;
          width: 190px;
          height: 56px;
          margin: 0 35px;
          font-size: 18px;
          line-height: 56px;
          border-radius: 28px;
          transition: all .3s;
          cursor: pointer;
        }
        .btn-github {
          color: #666;
          border: 1px solid #666;
          background-color: #fff;
          background-image: linear-gradient(#fff 0%, #ccc 100%);
          box-shadow: none;
        }
      }
    }
    .panel::after {
      content: '';
      display: block;
      position: absolute;
      top: -80px;
      width: 100%;
      height: 220px;
      background: #fff;
      box-shadow: 0 0 160px 0 #ccc;
    }
  }
</style>
