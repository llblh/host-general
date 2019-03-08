# @carpenter/host-general


![host-general](http://stor.llblh.com/host-general.gif)


### 安装
> npm i @carpenter/host-general

### 引用
``` js
  import hostGeneral from '@carpenter/host-general';
  
  Vue.use(hostGeneral);
```

``` js
  this.$toast.loading('加载中...');
  this.$toast.close(); // 关闭
  this.$toast.success('成功提示', 1000)
  this.$toast.error('错误提示');
  this.$notify('错误提示', 1000);
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
```
