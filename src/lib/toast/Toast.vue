<template>
  <div class="host-toast" v-if="isShow">
    <div class="toast-transparent"></div>
    <div class="toast-box">
      <i :class="iconType"></i>
      <span class="toast-box_tips">{{content}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      isShow: false, // 显示
      timer: null,
    };
  },
  beforeMount() {
    const el = document.querySelector('.host-toast');
    // 是否存在父级
    if (el && !this.state) {
      el.remove();
      this.$destroy();
    } else {
      document.body.appendChild(this.$el);
      this.isShow = true;
    }
  },
  mounted() {
    if (this.iconType !== 'general-loading') {
      this.timer = setTimeout(() => this.close(), this.duration);
    }
  },
  methods: {
    close() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.isShow = false;
      this.$destroy();
      this.$el.remove();
    },
  },
};
</script>
<style lang="less">

@font-face {font-family: "generalfont";
  src: url('data:application/x-font-woff;charset=utf-8;base64,d09GMgABAAAAAANEAAsAAAAAB3gAAAL1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqCHIIIATYCJAMQCwoABCAFhREHQxuRBhEVlPVkPxJst1EVvZGNRG7EyqAYGrwJQpL7frLJCfymS5glrEqur3uwcM4BG/VClWTtyKP/ppdSgEYBMP/X1FuVQH07AFhVW1OFUYJ1YNTzAZbIgHzD2E0EDmE/BAglk3KkddvOvQnGAMMEkMkTxo0gOOfBMCsejBBYM9eQDQQQ7Fa6p8B6/n35T00JBkeAAsZ2H9tmNM1/Vf5hXe5fPphCcOczAdYiUKAcMJDhtZaBqIyUo4QG2xmVQCCG4H5V+8N+/5xsroF9cvf/x1McSCAgMRyA2mpU4VclhiHwqxoMhT8jEnAAP0MWLGPdgck6Jv3qguCS0+NCBm3blZS0/XhCn63Hk2ZtP5qQuHV5/OwtqxJHvH/fd8Xp1Sd5967Phw/9cspVp2xRmPpcb9/O2y77Xre9+zJ9ecKAsJ3XVt9IC+t97tXyl6ter3jTv/mqobrB4jkXbq95+PJE0NkLt3ZcWZm+qnq9U2k78Te7Zh6PXYsikyg99PHjISJUU6uHUk4Vt5UJmfQR2IupEZE+Zr7I8LTqxyU4u3Z2sDRZvXzuY1zveb3mMR2QrufdZfDfVE3cnBPcrF8IIPDtz4qiYVGNq4LDDICPJ1iluP03jf46gm/NKvDHuT1rLOQDrZkvwJzIZqSPDjkgFPrBD3DE8mkOWULvRBDCSEiBI4hsoIRRhDBMTUQApgkiENMehFJGr8VhxLEURSwEKGWjAoRErgBHJK+AkshnhGGqoACKhCECMTkglL5Sb80wCmWt4nAM4ISWmj8NwhqJstOhg0FgpTa/oXsrDqVc79UXQhysoTIraiRXlTffhPjpqpQkyWA1XZzDoJQlF+wIkbI+JVfnuay7Uyasnh04BnBCS82fBmGNpKvTgQ4GgZVqusGmvhWX0F5CjeRVssTB6g6VWdGv9qoX2OMx8dNVKUmSwWq6jOsFpSy5+l4jRMr6ESFX57CR7CvJTi/Tn5RtlQBuYOJExSSA7ay3EIhxqyy3g+nWCMGG2QwAAAA=') format('woff')
}
.general-success,
.general-error,
.general-loading {
  display: block;
  font-family: "generalfont" !important;
  font-size: 300%;
  font-style: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.general-success:before {
  content: "\e62e";
}
.general-error:before {
  content: "\e62f";
}
.general-loading:before {
  content: "\e861";
}

.general-loading {
  margin: .1em;
  font-size: 250%;
  animation: generalLoading 1s steps(12, end) infinite;
}
@keyframes generalLoading {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
.toast {
  &-transparent{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9000;
  }
  &-box {
    box-sizing: border-box;
    position: fixed;
    padding: 1em;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
    background: rgba(17, 17, 17, 0.65);
    text-align: center;
    font-size: 100%;
    border-radius: .3em;
    color: #FFF;
    z-index: 9000;
    &_tips {
      flex: 1;
      display: block;
      min-width: 5em;
      margin-top: .8em;
      line-height: 1.5;
      text-align: center;
      font-weight: 400;
    }
  }
}
</style>
