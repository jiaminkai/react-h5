import React from 'react'
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

export default (props) => {
  let navigate = useNavigate()
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )
  const back = () => {
    console.log("返回");
    navigate(-1)
  }

  return (
      <div className={[props.sticky ?'stickyNav':'']}>
        <NavBar right={props.right ? right : ''} onBack={back} backArrow={!props.left}>
          {props.title || '标题'}
        </NavBar>
      </div>
  )
}