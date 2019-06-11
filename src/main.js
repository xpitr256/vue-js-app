// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.json'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: {en}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
