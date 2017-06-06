<template>
	<div :class="['jo-number-count', {'disable': rule.disable}, rule.customClass]">
		<div :class="['number-count-wrap', { 'focus': isFoucs}]">
			<div><i class="jo-icon icon-edit jo-icon-minus" @click.left="editNum('minus')"></i></div>
			<div v-if="rule.disable" class="input-ct">
				<input disabled="disabled" :class="['count-input']" type="number" step="1"	v-model.number="inputVal"
					     @focus="isFoucs = true" @blur="isFoucs = false">
			</div>
			<div v-if="!rule.disable" class="input-ct">
				<input :class="['count-input']" type="number" step="1"	v-model.number="inputVal"
					     @focus="isFoucs = true" @blur="isFoucs = false">
			</div>
			<div><i class="jo-icon icon-edit jo-icon-add" @click.left="editNum('add')"></i></div>
		</div>
	</div>
</template>

<script>
	'use strict'
	export default {
		name: 'JoCount',
		props: {
			rule: {
				type: Object,
				default: {
					disable: false,
					value: 0,
					min: 0,
					max: 100,
					customClass: ""
				}
			},
		},
		data() {
			return {
				inputVal: this.rule.value,
				isFoucs: false,
			}
		},
		methods : {
			editNum (type) {
				if (this.rule.disable) {
					this.$message({
						message: '当前按钮已经禁用',
						type: 'warning',
						showClose: true,
					});
					return;
				};
				(type === 'add') ? (this.inputVal += 1) : (this.inputVal -= 1);
			}
		},
		watch : {
			'isFoucs': {
				handler: function (newV, oldV) {
					this.inputVal  = Math.ceil(this.inputVal);
					this.$emit("foucs-change", this.isFoucs);
				},
				deep: true
			}, 
			'inputVal': {
				handler: function (newV, oldV) {
					let [min, max] = [this.rule.min, this.rule.max];
					if (newV > max) {
						this.inputVal = max;
						this.$message({
							message: '您设置的值超出最大值',
							type: 'warning',
							showClose: true,
						});
						return;
					};
					if (newV < min) {
						this.inputVal = min;
						this.$message({
							message: '您设置的值超出最小值',
							type: 'warning',
							showClose: true,
						});
						return;
					};
					this.$emit('count-change', this.inputVal);
				},
				deep: true
			}
		}
	}
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
