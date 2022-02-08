import { createStore } from 'vuex'
import home from './home'
import search from './search'
export default createStore({
  modules: {
    home,
    search
  }
})
