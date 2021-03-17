import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui';
import './commom/commom.css'
Vue.use(ElementUi);
Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')