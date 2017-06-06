<template>
    <button class="jo-btn" :disabled="disabled"
        :class="[
            type ? 'jo-btn-' + type : '',
            size ? 'jo-btn-' + size : '',
            {
                'disabled': disabled,
                'loading': loading
            }
        ]"
        @click="handleClick"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    'use strict'

    export default {
        name: 'JoButton',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            loading: Boolean,
            disabled: Boolean,
        },
        data() {
            return {

            }
        },
        methods: {
            handleClick(e) {
                this.$emit('click', e)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
