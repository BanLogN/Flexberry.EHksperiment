import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'E hksperiment',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'E hksperiment',
          title: 'E hksperiment'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
