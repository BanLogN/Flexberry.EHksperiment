import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-e-hksperiment-имя-услуг-l');
  this.route('i-i-s-e-hksperiment-имя-услуг-e',
  { path: 'i-i-s-e-hksperiment-имя-услуг-e/:id' });
  this.route('i-i-s-e-hksperiment-имя-услуг-e.new',
  { path: 'i-i-s-e-hksperiment-имя-услуг-e/new' });
  this.route('i-i-s-e-hksperiment-прайс-l');
  this.route('i-i-s-e-hksperiment-прайс-e',
  { path: 'i-i-s-e-hksperiment-прайс-e/:id' });
  this.route('i-i-s-e-hksperiment-прайс-e.new',
  { path: 'i-i-s-e-hksperiment-прайс-e/new' });
  this.route('i-i-s-e-hksperiment-услуги-l');
  this.route('i-i-s-e-hksperiment-услуги-e',
  { path: 'i-i-s-e-hksperiment-услуги-e/:id' });
  this.route('i-i-s-e-hksperiment-услуги-e.new',
  { path: 'i-i-s-e-hksperiment-услуги-e/new' });
});

export default Router;
