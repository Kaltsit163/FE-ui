<template>
  <div :class="['jo-search', {'focus': isFoucs}]">
    <input class="search-input" type="text" :placeholder="search.placeholder" :maxlength="search.max"
          @focus="isFoucs = true" @blur="isFoucs = false" @keydown.enter = confirmSearch()
          v-model.trim="searchWord" >
    <i class="jo-icon jo-icon-search" @click.left="confirmSearch()"></i>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'JoSearch',
    props: {
      search: {
        type: Object,
        default: {
          word: "",
          placeholder: "输入内容",
          max: 20
        }
      }
    },
    data () {
      return {
        isFoucs: false,
        searchWord: this.search.word || ""
      }
    },
    methods: {
      confirmSearch () {
        this.$emit('confirm-search', this.searchWord);
      }
    },
    watch : {
			'isFoucs': {
				handler: function (newV, old) {
					this.$emit('focus-change', newV);
				},
				deep: true
			}, 
			'searchWord': {
				handler: function (newV, oldV) {
          if (!this.search) {
             this.search = "";
          };
					this.$emit('search-change', this.searchWord);
				},
				deep: true
			}
		}
  }
</script>

<style lang="scss" scoped>
    @import "./main.scss";
</style>