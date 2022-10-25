import React, { memo } from 'react'
import '@/assets/css/reset.css'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

import ZZFAppHeader from './components/app-header'
import ZZFAppFooter from './components/app-footer'
import { Provider } from 'react-redux'
import store from './store';

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ZZFAppHeader />
        <Routes />
        <ZZFAppFooter />
      </BrowserRouter>
    </Provider>
  )
})

export default App