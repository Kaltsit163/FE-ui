import Picker from '../picker';
import Panel from '../panel/time-select';

export default {
  mixins: [Picker],

  name: 'JoTimeSelect',

  beforeCreate() {
    this.type = 'time-select';
    this.panel = Panel;
  }
};
