import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import { store } from '@/store.js'
import { colors } from '@/utils.js'

Vue.mixin({
  computed: {
    $snackbarShow: {
      get() {
        return store.snackbar.show
      },
      set(newValue) {
        store.snackbar.show = newValue
      }
    },
    $snackbarText: {
      get() {
        return store.snackbar.text
      },
      set(newValue) {
        store.snackbar.text = newValue
      }
    },
    $snackbarColor: {
      get() {
        return store.snackbar.color
      },
      set(newValue) {
        store.snackbar.color = newValue
      }
    },
    $drawer: {
      get() {
        return store.drawer
      },
      set(newValue) {
        store.drawer = newValue
      }
    },
    $darkMode: {
      get() {
        return store.darkMode
      },
      set(newValue) {
        store.darkMode = newValue
        localStorage.setItem('darkMode', newValue)
      }
    },
    $styles() {
      return this.$darkMode ? colors.dark : colors.light
    },
    $colorPrimary() {
      return this.$darkMode ? colors.dark['--color-primary'] : colors.light['--color-primary']
    },
    $bgPrimary() {
      return this.$darkMode ? colors.dark['--bg-primary'] : colors.light['--bg-primary']
    },
    $bgSecondary() {
      return this.$darkMode ? colors.dark['--bg-secondary'] : colors.light['--bg-secondary']
    },
    $fontColorPrimary() {
      return this.$darkMode ? colors.dark['--font-color-primary'] : colors.light['--font-color-primary']
    }
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
