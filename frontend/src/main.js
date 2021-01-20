import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import titleMixin from './mixins/titleMixin'

let Vue = createApp(App)

Vue.use(router).mount('#app')
Vue.mixin(titleMixin)