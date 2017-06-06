/**
 * @Author: zhangxinliang
 * @Date:   2017-04-20 14:48:00
 * @Last modified by:   zhangxinliang
 * @Last modified time: 2017-04-25 14:08:50
 */

 import Button from './main'

 Button.install = function(Vue) {
   Vue.component(Button.name, Button)
 }

 export default Button
