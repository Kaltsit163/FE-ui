<template>
    <span class="jo-progressbar">
        <span class="jo-progressbar-bar">
            <i :class="[
                    'jo-progressbar-inner',
                    status ? 'jo-progressbar-' + status : ''
                ]"
                :style="{
                    width: progress + '%'
                }"
            ></i>
        </span>
        <i v-if="status === 'success'" class="jo-progressbar-iconsuc"></i>
        <i v-else-if="status === 'error'" class="jo-progressbar-iconerr"></i>
        <span v-else class="jo-progressbar-progress">{{progress}}%</span>
    </span>
</template>

<script>
    'use strict'

    export default {
        name: 'JoProgressbar',
        props: {
            status: String,
            progress: Number
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    @import "./main.scss";
</style>
