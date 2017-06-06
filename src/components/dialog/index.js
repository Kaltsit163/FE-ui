/**
 * @Author: zhangxinliang
 * @Date:   2017-05-04 13:56:24
 * @Last modified by:   zhangxinliang
 * @Last modified time: 2017-05-04 14:17:04
 */

 import Dialog from './main'

 Dialog.install = function(Vue) {
   Vue.component(Dialog.name, Dialog)
 }

 export default Dialog
