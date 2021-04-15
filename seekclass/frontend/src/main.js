import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"
import store from './config/store'
import './config/bootstrap'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
	store, 
	router,
	render: h => h(App),
}).$mount('#app')
