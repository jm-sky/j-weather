import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from '../i18n/index';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages
});

export default ({ app }) => {
  app.i18n = i18n
};

// if you need to import it from
// other files, then:
export { i18n }
