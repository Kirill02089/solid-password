/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import './service-worker'

render(() => <App />, document.getElementById('root') as HTMLElement)
