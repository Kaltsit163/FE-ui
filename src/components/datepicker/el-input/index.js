import ElInput from './main';

/* istanbul ignore next */
ElInput.install = function(Vue) {
  Vue.component(ElInput.name, ElInput);
};

export default ElInput;