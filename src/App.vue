<template>
  <div id="app">
    <button @click="load">加载</button>
    <button @click="$toast.success('成功提示', 1000)">成功</button>
    <button @click="$toast.error('错误提示')">错误</button>
    <button @click="$notify('错误提示', 1000)">通知</button>
    <button @click="dialog">对话框</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      onOk: '点击确定',
      onCancel: '点击取消',
    };
  },
  components: {
  },
  methods: {
    load() {
      this.$toast.loading('加载中...');
      setTimeout(() => {
        this.$toast.close();
      }, 2000);
    },
    dialog() {
      this.$dialogs({
        title: '标题',
        content: '内容展示',
        cancelText: '取消',
        okText: '确定',
        closeBtn: true,
        onOk: () => {
          // console.log(this.onOk);
        },
        onCancel: () => {
          // console.log(this.onCancel);
        },
      });
    },
  },
};
</script>

<style lang="less">
body{
  font-size: 14px;
  color: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 60px;
  button {
    display: block;
    width: 50%;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: transparent;
    outline: 0;
    &:active {
      transform: translateY(1px);
    }
  }
}
</style>
