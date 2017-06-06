<template>
    <div v-if="showSizer || showElevator" :class="optsClasses">
        <div v-if="showSizer" :class="sizerClasses">
            <i-select v-model="currentPageSize" :size="size" :placement="placement" @on-change="changeSize">
                <i-option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align:center;">{{ item }} {{ t('i.page.page') }}</i-option>
            </i-select>
        </div>
        <div v-if="showElevator" :class="ElevatorClasses">
            跳转<input type="number" :value="_current" @keyup.enter="changePage">页
             <!--<span class="page-confirm-btn-xs" @click="changePage">确定</span>-->
        </div>
    </div>
</template>
<script>
    import iSelect from '../selectlist/main';
    import iOption from '../selectlist/option';
    import Locale from '@/mixins/locale';

    const prefixCls = 'ivu-page';

    function isValueNumber (value) {
        return (/^[1-9][0-9]*$/).test(value + '');
    }

    export default {
        name: 'JoPageOption',
        mixins: [ Locale ],
        components: { iSelect, iOption },
        props: {
            pageSizeOpts: Array,
            showSizer: Boolean,
            showElevator: Boolean,
            current: Number,
            _current: Number,
            pageSize: Number,
            allPages: Number,
            isSmall: Boolean,
            placement: String
        },
        data () {
            return {
                currentPageSize: this.pageSize
            };
        },
        watch: {
            pageSize (val) {
                this.currentPageSize = val;
            }
        },
        computed: {
            size () {
                return this.isSmall ? 'small' : 'default';
            },
            optsClasses () {
                return [
                    `${prefixCls}-options`
                ];
            },
            sizerClasses () {
                return [
                    `${prefixCls}-options-sizer`
                ];
            },
            ElevatorClasses () {
                return [
                    `${prefixCls}-options-elevator`
                ];
            }
        },
        methods: {
            changeSize () {
                this.$emit('on-size', this.currentPageSize);
            },
            changePage (event) {
                let val = event.target.value.trim();
                let page = 0;

                if (isValueNumber(val)) {
                    val = Number(val);
                    if (val != this.current) {
                        const allPages = this.allPages;

                        if (val > allPages) {
                            page = allPages;
                        } else {
                            page = val;
                        }
                    }
                } else {
                    page = 1;
                }

                if (page) {
                    this.$emit('on-page', page);
                    event.target.value = page;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
        margin: 0; 
    }

    input[type="number"]{-moz-appearance:textfield;}
    .page-confirm-btn-xs {
        background: #2dcc70;
        border-color:#2dcc70 !important;
        border-radius: 5px;
        padding: 8px 16px;
        cursor: pointer;
        margin-left: 10px;
        color: #fff;
        &:hover {
            background: #32e57d;
        }
    }
    .ivu-page-options-elevator {
        input {
            &:focus {
                border-color: #2dcc70;
            }
            &:hover {
                border-color: #2dcc70;
            }
        }
    }
</style>