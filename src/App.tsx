import React, { memo, Suspense } from 'react'
import '@/assets/css/reset.css'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

import ZZFAppHeader from './components/app-header'
import ZZFAppFooter from './components/app-footer'
import { Provider } from 'react-redux'
import store from './store';
import ZZFAppPlayerBar from 'pages/player/app-player-bar'

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ZZFAppHeader />
        {/* 将lazy进来的组件包起来，并设置好fallback属性即可 */}
        <Suspense fallback={<div>Loading... </div>}>
        <Routes />
        </Suspense>
        <ZZFAppFooter />
        <ZZFAppPlayerBar />
        {/* 返回顶部 */}
        {/* <BackTop /> */}
      </BrowserRouter>
    </Provider>
  )
})

export default App