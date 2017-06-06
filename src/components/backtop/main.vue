<style scoped lang="scss">
  .go-top {
    opacity: 0;
    font-size: 20px;
    color: #fff;
    position: fixed;
    text-align: center;
    z-index: 99;
    right: 50px;
    bottom: -50px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.3s;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
    }
  }
  .back-top-show {
    bottom: 100px;
    right: 50px;
    opacity: 1;
    transition: 0.3s;
  }
</style>

<template>
  <section :class="['go-top', {'back-top-show': topShow}]" @click="backTop">
    <i class="jo-icon jo-icon-up-arrow"></i>
  </section>
</template>

<script>
'use strict'

export default {
  name: 'BackTop',
  data() {
    return {
      topShow: false,
      speed: 0
    };
  },
  methods: {
    backTop() {
      this.speed = (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) / 10;
      window.requestAnimationFrame(this.stepBack);
    },
    stepBack() {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      scrollTop -= this.speed;
      window.scrollTo(0, scrollTop);
      if (scrollTop > 0) {
        window.requestAnimationFrame(this.stepBack);
      }
    }
  },
  mounted () {
    let _this = this;
    window.addEventListener("scroll", ()=> {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      let lenWin = window.screen.height;
      if (scrollTop >= lenWin * 0.4) {
        _this.topShow = true;
      } else {
        _this.topShow = false;
      }
      return;
    });
  }
};
</script>