<template>
    <transition name="jo-dialog-fade">
        <div class="jo-dialog" v-show="show">
            <transition name="jo-dialog-scale">
                <div :class="template ? 'jo-dialog-template' : 'jo-dialog-box'" v-show="show">
                    <i class="jo-icon jo-icon-close" @click="handelClose"></i>
                    <div v-if="type === 'info' && $slots.info" class="jo-dialog-info">
                        <slot name="info"></slot>
                    </div>
                    <div v-if="$slots.btns" class="jo-dialog-btns">
                        <slot name="btns"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    'use strict'

    export default {
        name: 'JoDialog',
        props: {
            type: {
                type: String,
                default: 'info'
            },
            show: Boolean,
            template: Boolean
        },
        data() {
            return {

            }
        },
        methods: {
            handelClose(event) {
                this.$emit('close', event)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
