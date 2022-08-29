import App from './App'

import {
	createSSRApp
} from 'vue'
import store from './store'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	return {
		app
	}
}
