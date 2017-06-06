<template>
    <label :class="[
        'jo-radio',
        disabled ? 'disabled' : ''
    ]">
        <span :class="[
            'jo-radio-input',
            model === label ? 'checked' : '' 
        ]">
            <span class="jo-radio-inner"></span>
            <input
                class="jo-radio-original"
                type="radio"
                v-model="model"
                :value="label"
                :name="name"
                :disabled="disabled"
            >
        </span>
        <span class="jo-radio-label">
            <slot></slot>
            <template v-if="!$slots.default">{{value}}</template>
        </span>
    </label>
</template>

<script>
    'use strict'

    export default {
        name: 'JoRadio',
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
        }
    }
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
