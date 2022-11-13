import React, { memo } from 'react'
import { Result, Button } from 'antd';
import {RollbackOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

export default memo(function ErrorPage(props) {
  // props/state
  const navigate = useNavigate();
  // other function
  const handleGoHomeBack = () => {
    navigate('/', {replace: true})
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={<Button type="primary" icon={<RollbackOutlined />} onClick={handleGoHomeBack}>返回首页</Button>}
    />
  )
})
