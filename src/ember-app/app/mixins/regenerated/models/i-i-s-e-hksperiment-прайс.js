import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  цена: DS.attr('decimal'),
  имяУслуг: DS.belongsTo('i-i-s-e-hksperiment-имя-услуг', { inverse: null, async: false })
});

export let ValidationRules = {
  цена: {
    descriptionKey: 'models.i-i-s-e-hksperiment-прайс.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  имяУслуг: {
    descriptionKey: 'models.i-i-s-e-hksperiment-прайс.validations.имяУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрайсE', 'i-i-s-e-hksperiment-прайс', {
    цена: attr('Цена', { index: 0 }),
    имяУслуг: belongsTo('i-i-s-e-hksperiment-имя-услуг', 'Имя услуг', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПрайсL', 'i-i-s-e-hksperiment-прайс', {
    цена: attr('Цена', { index: 0 }),
    имяУслуг: belongsTo('i-i-s-e-hksperiment-имя-услуг', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
