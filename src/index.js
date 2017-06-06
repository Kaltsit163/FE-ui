/**
 * @Author: zhangxinliang
 * @Date:   2017-04-20 14:20:18
 * @Last modified by:  liuyejunnan
 * @Last modified time: 2017-05-18 10:00:14
 */

require("./sass/icon.css");

import Button from './components/button/index';
import Radio from './components/radio/index';
import Checkbox from './components/checkbox/index';
import Selectbox from './components/selectbox/index';
import Switch from './components/switch/index';
import Page from './components/page/index';
import Breadcrumb from './components/breadcrumb/index';
import BreadcrumbItem from './components/breadcrumb-item/index';
import Progressbar from './components/progressbar/index';
import Input from './components/input/index';
import Dialog from './components/dialog/index';
import Loading from './components/loading/index';
import BackTop from './components/backtop/index';
import NumberCount from './components/numbercount/index';
import Search from './components/search/index';
import Select from './components/select/index';
import Message from './components/topmsg/index';
import Tree from './components/tree/index';
import Datepicker from './components/datepicker/index';
import Timepicker from './components/timepicker/index';
import Popper from 'iview/src/components/poptip'
import 'iview/dist/styles/iview.css'; // 使用 CSS;
import locale from '@/locale';
import CollapseTransition from './transitions/collapse-transition';

const components = [
    Button,
    Radio,
    Checkbox,
    Selectbox,
    Switch,
    Page,
    Breadcrumb,
    BreadcrumbItem,
    Progressbar,
    Input,
    Dialog,
    Loading,
    BackTop,
    NumberCount,
    Search,
    Select,
    Message,
    Tree,
    Datepicker,
    Timepicker,
    Popper,
    CollapseTransition
]

function install(Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);
    components.map(component => {
        Vue.component(component.name, component)
    });
    Vue.prototype.$message = Message;
}

export default {
    install,
    Button,
    Radio,
    Checkbox,
    Selectbox,
    Switch,
    Page,
    Breadcrumb,
    BreadcrumbItem,
    Progressbar,
    Input,
    Dialog,
    Loading,
    BackTop,
    NumberCount,
    Search,
    Select,
    Message,
    Tree,
    Datepicker,
    Timepicker,
    Popper,
    CollapseTransition
}