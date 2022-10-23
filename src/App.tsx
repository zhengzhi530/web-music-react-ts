import React, { memo } from 'react'
import '@/assets/css/reset.css'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

import ZZFAppHeader from './components/app-header'
import ZZFAppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <BrowserRouter>
        <ZZFAppHeader />
        <Routes />
        <ZZFAppFooter />
      </BrowserRouter>
    </div>
  )
})

export default App