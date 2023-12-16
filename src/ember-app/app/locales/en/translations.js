import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISEHksperimentИмяУслугLForm from './forms/i-i-s-e-hksperiment-имя-услуг-l';
import IISEHksperimentПрайсLForm from './forms/i-i-s-e-hksperiment-прайс-l';
import IISEHksperimentУслугиLForm from './forms/i-i-s-e-hksperiment-услуги-l';
import IISEHksperimentИмяУслугEForm from './forms/i-i-s-e-hksperiment-имя-услуг-e';
import IISEHksperimentПрайсEForm from './forms/i-i-s-e-hksperiment-прайс-e';
import IISEHksperimentУслугиEForm from './forms/i-i-s-e-hksperiment-услуги-e';
import IISEHksperimentИмяУслугModel from './models/i-i-s-e-hksperiment-имя-услуг';
import IISEHksperimentПрайсModel from './models/i-i-s-e-hksperiment-прайс';
import IISEHksperimentУслугиModel from './models/i-i-s-e-hksperiment-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-e-hksperiment-имя-услуг': IISEHksperimentИмяУслугModel,
    'i-i-s-e-hksperiment-прайс': IISEHksperimentПрайсModel,
    'i-i-s-e-hksperiment-услуги': IISEHksperimentУслугиModel
  },

  'application-name': 'E hksperiment',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'E hksperiment',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'E hksperiment',
          title: 'E hksperiment'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'e-hksperiment': {
          caption: 'EHksperiment',
          title: 'EHksperiment',
          'i-i-s-e-hksperiment-имя-услуг-l': {
            caption: 'Имя услуг',
            title: ''
          },
          'i-i-s-e-hksperiment-прайс-l': {
            caption: 'Прайс',
            title: ''
          },
          'i-i-s-e-hksperiment-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-e-hksperiment-имя-услуг-l': IISEHksperimentИмяУслугLForm,
    'i-i-s-e-hksperiment-прайс-l': IISEHksperimentПрайсLForm,
    'i-i-s-e-hksperiment-услуги-l': IISEHksperimentУслугиLForm,
    'i-i-s-e-hksperiment-имя-услуг-e': IISEHksperimentИмяУслугEForm,
    'i-i-s-e-hksperiment-прайс-e': IISEHksperimentПрайсEForm,
    'i-i-s-e-hksperiment-услуги-e': IISEHksperimentУслугиEForm
  },

});

export default translations;
