<template>
    <span class="jo-input">
        <textarea
            v-if="type === 'textarea'"
            :id="id"
            :class="[
                state ? state : ''
            ]"
            :style="{
                width,
                height
            }"
            :disabled="disabled"
            :placeholder="placeholder"
            :value="value"
            @input="handelInput"
            @focus="handelFocus"
            @blur="handelBlur"
        ></textarea>
        <input
            v-else
            :type="type"
            :id="id"
            :class="[
                size ? 'jo-input-' + size : '',
                state ? state : ''
            ]"
            :disabled="disabled"
            :placeholder="placeholder"
            :value="value"
            @input="handelInput"
            @focus="handelFocus"
            @blur="handelBlur"
        >
        <transition name="fade">
            <span :class="[
                'jo-input-hint',
                hint && hint.position ? 'jo-input-hint-' + hint.position : '',
                hint && hint.state ? hint.state : ''
            ]" v-show="hint && hint.show">
                <i></i><span v-show="hint && hint.msg">{{hint && hint.msg ? hint.msg : ''}}</span>
            </span>
        </transition>
    </span>
</template>

<script>
    'use strict'

    export default {
        name: 'JoInput',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            size: {
                type: String,
                default: 'lg'
            },
            id: String,
            state: String,
            disabled: Boolean,
            hint: Object,
            width: String,
            height: String,
            placeholder: String,
            value: String
        },
        data() {
            return {

            }
        },
        methods: {
            handelInput(event) {
                const value = event.target.value
                this.$emit('input', value)
                this.$emit('change', value)
            },
            handelFocus(event) {
                this.$emit('focus', event)
            },
            handelBlur(event) {
                this.$emit('blur', event)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
