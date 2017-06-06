/**
 * @Author: zhangxinliang
 * @Date:   2017-04-28 14:12:32
 * @Last modified by:   zhangxinliang
 * @Last modified time: 2017-04-28 14:13:52
 */

 import BreadcrumbItem from './main'

 BreadcrumbItem.install = function(Vue) {
     Vue.component(BreadcrumbItem.name, BreadcrumbItem)
 }

 export default BreadcrumbItem
