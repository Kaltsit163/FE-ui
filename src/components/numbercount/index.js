/**
 * @Author: liuyejunnan
 * @Date:   2017-05-10 11:50:36
 * @Last modified by:  liuyejunnan
 * @Last modified time: 2017-05-10 11:50:36
 */

 import NumberCount from './main'

 NumberCount.install = function(Vue) {
     Vue.component(NumberCount.name, NumberCount)
 }

 export default NumberCount
