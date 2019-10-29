<template>
  <transition name="notifications">
    <div class="notifications" v-if="isShow">
      <div class="notifications-info" v-html="content"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'notice',
  data() {
    return {
      isShow: false, // 显示
    };
  },
  beforeMount() {
    const parent = document.querySelector('.notifications');
    // 是否存在父级
    if (parent) {
      parent.remove();
    }
    document.body.appendChild(this.$el);
  },
  mounted() {
    this.isShow = true;
    this.timer = setTimeout(() => this.close(), this.duration);
  },
  methods: {
    close() {
      clearTimeout(this.timer);
      this.isShow = false;
      this.$destroy();
      this.$el.remove();
    },
  },
};
</script>
<style lang="less">
.notifications {
  font-size: 100%;
  position: fixed;
  left: 2.5em;
  right: 2.5em;
  bottom: 10%;
  z-index: 9000;
  text-align: center;
  transition: all .17s .02s cubic-bezier(0.82, 0.18, 0.38, 1);
  &-info {
    display: inline-block;
    padding: .47em 1.2em;
    border-radius: .25em;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    font-size: 100%;
    line-height: 1.5;
  }
  &-enter,
  &-enter-active,
  &-leave-to {
    opacity: 0;
    transform: translateY(500%);
  }

  &-enter-to,
  &-leave,
  &-leave-active {
    opacity: 1;
    transform: translateY(500%);
  }
}
</style>
