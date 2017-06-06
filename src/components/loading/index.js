/**
 * @Author: liuyejunnan
 * @Date:   2017-05-04 14:09:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 2017-05-04 14:09:33
 */

import Loading from './main'

Loading.install = function(Vue) {
    Vue.component(Loading.name, Loading)
}

export default Loading
