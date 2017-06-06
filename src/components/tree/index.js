/**
 * @Author: liuyejunnan
 * @Date:   2017-05-12 14:09:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 2017-05-14 14:09:33
 */

import Tree from './main'

Tree.install = function(Vue) {
    Vue.component(Tree.name, Tree)
}

export default Tree