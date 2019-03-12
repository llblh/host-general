<template>
  <transition name="dialogs">
    <div class="dialogs" v-if="show">
      <div class="dialogs-mask"></div>
      <div class="dialogs-box">
        <div class="dialogs-hd" >
          <p v-html="title"></p>
          <span class="dialogs-close" v-if="closeBtn" @click.stop.prevent="onChangCancel()"></span>
        </div>
        <div class="dialogs-bd" v-if="!isSlot" v-html="content"></div>
        <div class="dialogs-bd" v-else>
          <slot />
        </div>
        <div class="dialogs-fd" :class="footerClass" v-if="okText">
          <button class="dialogs-btn dialog_btn_default"
            @click.stop.prevent="onChangCancel()"
            v-if="cancelText"
            v-html="cancelText"
          >
          </button>
          <button class="dialogs-btn"
            @click.stop.prevent="onChangOk()"
            v-html="okText"
          ></button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'dialogs',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    okText: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '',
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    onOk: {
      type: Function,
      default: () => {},
    },
    closeBtn: {
      type: Boolean,
      default: false,
    },
    footerClass: {
      type: String,
      default: '',
    },
    isSlot: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false, // 显示
    };
  },
  beforeMount() {
    if (!this.isSlot) {
      const parent = document.querySelector('.dialogs');
      // 是否存在父级
      if (parent) {
        parent.remove();
      }
      document.body.appendChild(this.$el);
    }
  },
  mounted() {
    if (!this.show && !this.isSlot) {
      this.show = true;
    } else {
      this.close();
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      if (this.isSlot) {
        this.$emit('input', val);
      }
      if (!val) {
        document.body.classList.remove('ban');
      } else {
        document.body.classList.add('ban');
      }
    },
  },
  methods: {
    onChangOk() {
      this.onOk();
      this.close();
    },
    onChangCancel() {
      this.onCancel();
      this.close();
    },
    close() {
      this.show = false;
      if (!this.isSlot) {
        this.$destroy();
        this.$el.remove();
      }
    },
  },
};
</script>

<style lang="less">
.dialogs {
  position: relative;
  z-index: 9000;
  &-mask {
    position: fixed;
    z-index: 9000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
  }
  &-box {
    position: fixed;
    z-index: 9000;
    width: 70.85%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    border-radius: .35em;
    overflow: hidden;
  }
  &-close {
    display: block;
    position: relative;
    width: 1.367em;
    height: 1.367em;
    opacity: .4;
    &::before, &::after {
      content: '';
      position: absolute;
      top: 45%;
      left: 10%;
      display: block;
      width: 80%;
      height: 1px;
      background-color: #000;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  &-hd {
    padding: 1em 1em 0;
    font-size: 115%;
    display: flex;
    align-items: center;
    p {
      flex: 1;
      padding: 0 1em;
      margin: 0;
    }
  }
  &-bd {
    padding: 1em;
    min-height: 2em;
    font-size: 100%;
    line-height: 1.5;
    word-wrap: break-word;
    word-break: break-all;
    text-align: left;
  }
  &-fd {
    position: relative;
    line-height: 3;
    display: flex;
    align-items: center;
    border-top: 1px solid #d5d5d6;
  }
  &-btn {
    display: block;
    flex: 1;
    color: #0071c5;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    padding: 1em;
    text-align: center;
    line-height: 1;
    background-color: #fff;
    border: 0;
    outline: 0;
    font-size: 110%;
    font-weight: 400;
    &.dialog_btn_default {
      color: #b3b3b3;
      border-right: 1px solid #d5d5d6;
    }
    &:active {
      background-color: #f1f1f1;
    }
  }
  &-enter-active, &-leave-active {
    transition: opacity .15s
  }
  &-enter, &-leave-to {
    opacity: 0
  }
}
</style>
