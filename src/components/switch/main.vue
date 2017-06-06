<template>
    <span :class="[
        'jo-switch',
        open ? 'open' : ''
    ]" @click="handleClick">
        <i class="jo-switch-slider"></i>
        <span class="jo-switch-text">{{open ? 'ON' : 'OFF'}}</span>
    </span>
</template>

<script>
    'use strict'

    export default {
        name: 'JoSwitch',
        props: {
            open: Boolean
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
