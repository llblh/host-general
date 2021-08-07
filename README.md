# @carpenter/host-general


![host-general](http://stor.llblh.com/host-general.gif)


### 安装
> npm i @carpenter/host-general

### 引用
``` js
  import hostGeneral from '@carpenter/host-general';
  // import { Dialog, general } from '@carpenter/host-general';
  // import { toast, notify, dialogs } from '@carpenter/host-general';
  
  Vue.use(hostGeneral);
  // Vue.use(general);
  // Vue.component('DialogBox', Dialog);
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
``` vue
  <DialogBox
    v-model="show" // 必填
    title="标题" // 选填
    content="内容展示" // 选填
    cancelText="取消" // 选填
    okText="确定" // 选填
    :closeBtn="true" // 选填
    :onOk="onCliickOk" // 选填 回调
    :onCancel="onCliickCancel" // 选填 回调
  >
    <!--
      <template v-slot:header>
        header
      </template>
    -->
    <div>内容展示</div>
    <!--
      <template v-slot:footer>
        footer
      </template>
    -->
  </DialogBox>
```
