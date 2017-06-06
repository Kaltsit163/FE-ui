<template>
    <span class="jo-breadcrumb-item" @click="linkTo">
        <span :class="[
                'jo-breadcrumb-item-inner',
                to ? 'jo-breadcrumb-item-link' : ''
            ]"
        ><slot></slot></span>
        <span class="jo-breadcrumb-item-separator">{{separator}}</span>
    </span>
</template>

<script>
    'use strict'

    export default {
        name: 'JoBreadcrumbItem',
        props: {
            to: String
        },
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            linkTo() {
                if (this.to) {
                    location.href = this.to
                }
            }
        },
        computed: {
            separator: {
                get() {
                    return this.$parent.separator
                }
            }
        }
    }
</script>
