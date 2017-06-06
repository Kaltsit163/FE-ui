/**
 * @Author: zhangxinliang
 * @Date:   2017-04-28 10:38:58
 * @Last modified by:   zhangxinliang
 * @Last modified time: 2017-04-28 10:40:53
 */

import Progressbar from './main'

Progressbar.install = function(Vue) {
    Vue.component(Progressbar.name, Progressbar)
}

export default Progressbar
