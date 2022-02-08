import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import './mock/mockServe'
//$bus
import mitt from 'mitt'
const app = createApp(App)
const $bus = {}
const emitter = mitt()
$bus.on = emitter.on
$bus.emit = emitter.emit
$bus.off = emitter.off
app.config.globalProperties.$bus = $bus

app.use(router)
app.use(store)
app.component(TypeNav.name, TypeNav)
app.mount('#app')
