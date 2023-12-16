import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  прайс: DS.belongsTo('i-i-s-e-hksperiment-прайс', { inverse: null, async: false })
});

export let ValidationRules = {
  прайс: {
    descriptionKey: 'models.i-i-s-e-hksperiment-услуги.validations.прайс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-e-hksperiment-услуги', {
    
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-e-hksperiment-услуги', {
    прайс: belongsTo('i-i-s-e-hksperiment-прайс', 'Цена', {
      цена: attr('Цена', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
