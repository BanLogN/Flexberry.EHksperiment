import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-e-hksperiment-прайс', 'Unit | Model | i-i-s-e-hksperiment-прайс', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-e-hksperiment-имя-услуг',
    'model:i-i-s-e-hksperiment-прайс',
    'model:i-i-s-e-hksperiment-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
