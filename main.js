import Vue from 'vue'
import App from './App'
import inputSearch from './components/inputSearch/inputSearch.vue'
import profileList from "./components/andy-adcell/andy-adcell.vue"

Vue.component('inputSearch', inputSearch)
Vue.component('profileList', profileList)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
