<template>
  <transition name="jo-message-fade">
    <div class="jo-message" :class="customClass" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <span class="jo-message-img" :class="type" alt="" v-if="!iconClass">
        <i v-if=" type==='warning' " class="jo-icon jo-icon-warn"></i>
        <i v-if=" type==='error' " class="jo-icon jo-icon-error"></i>
        <i v-if=" type==='info' " class="jo-icon jo-icon-warn"></i>
        <i v-if=" type==='success' " class="jo-icon jo-icon-gou"></i>
      </span>
      <div class="jo-message-group" :class="{ 'is-with-icon': iconClass }">
        <p><i class="jo-message-icon" :class="iconClass" v-if="iconClass"></i>{{ message }}</p>
        <div v-if="showClose" class="jo-message-closeBtn" @click="close">
          <i class="jo-icon-close"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
		name: 'JoTopMsg',
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null
      };
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },

    mounted() {
      this.startTimer();
    }
  };
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
