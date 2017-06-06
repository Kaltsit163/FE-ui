<template>
    <span class="jo-breadcrumb">
        <slot></slot>
    </span>
</template>

<script>
    'use strict'

    export default {
        name: 'JoBreadcrumb',
        props: {
            separator: {
                type: String,
                default: '/'
            },
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import "./main.scss";
</style>
