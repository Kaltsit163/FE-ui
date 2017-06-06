<template>
    <span :class="[
        'jo-selectbox',
        checked ? 'checked' : '',
        size ? 'jo-selectbox-' + size : '',
        type ? 'jo-selectbox-' + type : ''
    ]" @click="handleClick">
        <span v-if="$slots.default"><slot></slot></span>
    </span>
</template>

<script>
    'use strict'

    export default {
        name: 'JoSelectbox',
        props: {
            size: String,
            type: String,
            checked: Boolean
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
