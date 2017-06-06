<template>
  <div class="jo-select" :class="{'disable': disable}" @click.stop>
    <div :class="['select-down-content', {'show-option': show}]">
      <input class="selected-value-wrap" 
          readonly="true"
          :placeholder="showName"
          @click="toggleOptions()"
          :style="{'width': width + 'px'}">
      <i class="jo-icon jo-icon-down-arrow"></i>
      <div class="scroll-options" :style="{'width': width + 'px'}">
        <ul class="select-wrap" :style="{'width': (width + 20) + 'px'}">
          <li class="option-item" v-for="(item, index) in options" @click="chooseOptions(item, index)">
            <p class="option-name" v-text="transKey(item)"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'JoSelect',
    props: {
      disable: {
        type: Boolean,
        defalut: false,
      },
      width: {
        type: Number,
        defalut: 260
      },
      options: {
        type: Array,
        defalut: []
      },
      name: {
        type: String
      }
    },
    data () {
      return {
        showName: "请选择",
        show: false
      }
    },
    mounted () {
      let _this = this;
      document.querySelector("body").addEventListener( 'click', ($event)=> {
        _this.show = false;
      })
    },
    methods: {
      toggleOptions () {
        if (this.options.length === 0) {
          return;
        };
        if (this.disable) {
          this.$message({
            type: "warning",
            message: "下拉框已经被禁止"
          });
          return;
        }
        this.show = !this.show;
      },
      chooseOptions (item, index) {
        this.showName = item[this.name];
        this.show = false;
        const data = {
          "index": index,
          "data": item
        }
        this.$emit("select-change", data);
      },
      transKey (item) {
        return item[this.name];
      }
    },
    watch : {
      'width': {
				handler: function (newV, old) {
					if (!newV || newV < 100) {
            this.width = 100;
          }
				},
				deep: true
			}
		}
  }
</script>

<style scoped lang="scss">
@import "./main.scss";
</style>