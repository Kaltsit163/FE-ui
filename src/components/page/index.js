/**
 * @Author: zhangxinliang
 * @Date:   2017-04-26 13:41:29
 * @Last modified by:   zhangxinliang
 * @Last modified time: 2017-04-26 13:44:03
 */

import Page from './main'

Page.install = function(Vue) {
    Vue.component(Page.name, Page)
}

export default Page
