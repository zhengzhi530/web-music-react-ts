import { useChangeDropBoxState, useGlobalKeyboardEvent } from 'hooks/change-state'
import React, {  memo } from 'react'
import { HeaderCategory } from './style'
import AppNavBar from 'components/nav-bar'
import { Routes } from 'react-router-dom'

const ZZFDsicover = memo((props) => {
  // props/state
  // const { route } = props
  console.log("===>"+ JSON.stringify(props) )

  // custom hook
  useGlobalKeyboardEvent()// 全局注册 ctrl+k 唤醒下拉框

  return (
    <HeaderCategory onClick={useChangeDropBoxState()}>
      {/* 导航栏 */}
      <AppNavBar  />
      {/* <Routes /> */}
    </HeaderCategory>
  )
})

export default ZZFDsicover