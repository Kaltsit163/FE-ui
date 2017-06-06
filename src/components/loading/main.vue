<template>
  <transition name="jo-loading-fade">
    <div v-if="loading.visible" :class="['jo-loading-mask', loading.customClass, { 'fullscreen': loading.fullscreen }]">
      <div class="jo-loading-spinner">
        <svg class="circular">
          <circle class="path" cx="50%" cy="50%" r="20px" fill="none"/>
        </svg>
        <p v-if="loading.text" class="jo-loading-text">{{ loading.text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  'use strict'
  export default {
    name: 'JoLoading',
    props: {
      loading: {
        type: Object
      }
    },
    mounted () {
      this.loading.text ? this.setText() : '';
    },
    methods: {
      setText(text) {
        this.text = this.loading.text;
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>