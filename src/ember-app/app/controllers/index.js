import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.e-hksperiment.caption'),
          title: i18n.t('forms.application.sitemap.e-hksperiment.title'),
          children: [{
            link: 'i-i-s-e-hksperiment-имя-услуг-l',
            caption: i18n.t('forms.application.sitemap.e-hksperiment.i-i-s-e-hksperiment-имя-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.e-hksperiment.i-i-s-e-hksperiment-имя-услуг-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-e-hksperiment-прайс-l',
            caption: i18n.t('forms.application.sitemap.e-hksperiment.i-i-s-e-hksperiment-прайс-l.caption'),
            title: i18n.t('forms.application.sitemap.e-hksperiment.i-i-s-e-hksperiment-прайс-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-e-hksperiment-услуги-l',
            caption: i18n.t('forms.application.sitemap.e-hksperiment.i-i-s-e-hksperiment-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.e-hksperiment.i-i-s-e-hksperiment-услуги-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})