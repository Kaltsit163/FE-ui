/**
 * @Author: liuyejunnan
 * @Date:   2017-05-15 10:10:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 017-05-15 10:10:33
 */


import Timepicker from '../datepicker/picker/time-picker';
require("./main.css");
Timepicker.install = function(Vue) {
    Vue.component(Timepicker.name, Timepicker)
}

export default Timepicker
