import Vue from 'vue'
import App from './App'
import inputSearch from './components/inputSearch/inputSearch.vue'
import profileList from "./components/andy-adcell/andy-adcell.vue"
import uniNoticeBar from "./components/uni-notice-bar/uni-notice-bar.vue"
import modal from "./components/x-modal/x-modal.vue"

Vue.component('inputSearch', inputSearch)
Vue.component('profileList', profileList)
Vue.component('uniNoticeBar',uniNoticeBar)
Vue.component("modal",modal)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
