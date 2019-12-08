import Vue from 'vue'
import App from './App'
import inputSearch from './components/inputSearch/inputSearch.vue'

Vue.component('inputSearch', inputSearch)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
