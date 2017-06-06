/**
 * @Author: liuyejunnan
 * @Date:   2017-05-15 10:10:33
 * @Last modified by:   liuyejunnan
 * @Last modified time: 017-05-15 10:10:33
 */

import Datepicker from './picker/date-picker';


/* istanbul ignore next */
Datepicker.install = function install(Vue) {
  Vue.component(Datepicker.name, Datepicker);
};

export default Datepicker;
