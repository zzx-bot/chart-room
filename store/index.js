// 页面路径：store/index.js
import user from './modules/user'
import {
	createStore
} from 'vuex'
const store = createStore({
	modules: {
		user
	}
})

export default store
