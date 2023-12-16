import {
  defineNamespace,
  defineProjections,
  Model as ИмяУслугMixin
} from '../mixins/regenerated/models/i-i-s-e-hksperiment-имя-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИмяУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
