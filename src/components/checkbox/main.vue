<template>
	<label :class="[ 'jo-checkbox', disabled ? 'disabled' : '']">
    <span :class="[ 'jo-checkbox-input', isChecked()]">
    	<span class="jo-checkbox-inner"></span>
    	<input class="jo-checkbox-original" type="checkbox"
           v-model="model"
        	 :value="label"
           :name="name"
           :disabled="disabled">
    </span>
		<span class="jo-checkbox-label">
			<slot></slot>
			<template v-if="!$slots.default">{{value}}</template>
		</span>
	</label>
</template>

<script>
	'use strict'
	export default {
		name: 'JoCheckbox',
		props: {
			label: {},
			value: {},
			name: String,
			disabled: Boolean
		},
		data() {
			return {

			}
		},
		computed: {
			model: {
				get() {
					return this.value
				},
				set(val) {
					this.$emit('input', val)
				}
			}
		},
		methods: {
			isChecked() {
				if (typeof this.model === 'boolean') {
					return this.model ? 'checked' : ''
				}
				return this.model.indexOf(this.label) !== -1 ? 'checked' : ''
			}
		}
	}
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
