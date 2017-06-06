/**
 * @Author: liuyejunnan
 * @Date:   2017-05-04 14:09:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 2017-05-04 14:09:33
 */

import Search from './main'

Search.install = function(Vue) {
    Vue.component(Search.name, Search)
}

export default Search
