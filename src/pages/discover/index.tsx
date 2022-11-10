import { useChangeDropBoxState, useGlobalKeyboardEvent } from 'hooks/change-state'
import React, {  memo } from 'react'
import { HeaderCategory } from './style'
import AppNavBar from 'components/nav-bar'

const ZZFDsicover = memo(() => {
  // custom hook
  useGlobalKeyboardEvent()// 全局注册 ctrl+k 唤醒下拉框
  
  return (
    <HeaderCategory onClick={useChangeDropBoxState()}>
      {/* 导航栏 */}
      <AppNavBar  />
    </HeaderCategory>
  )
})

export default ZZFDsicover