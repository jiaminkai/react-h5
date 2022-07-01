import { useState } from "react"
import { NavLink,useNavigate } from 'react-router-dom';
import home1 from '@/assets/images/tabbar/home_1.png'
import home2 from '@/assets/images/tabbar/home_2.png'
import user1 from '@/assets/images/tabbar/my_1.png'
import user2 from '@/assets/images/tabbar/my_2.png'
import { SafeArea } from 'antd-mobile'

import './TabberNav.less'
function Tabber(props) {
  let Navigate = useNavigate()
  function toNav(path,type){
    return Navigate(path)
  }
  return (
    <div className="bottom-nav">
      <div className='nav-item' onClick={() => { toNav('/home',0) }}>
        <div className='nav-item' >
          <div className="nav-item">
            <img className="nav-icon" src={props.active === 0 ? home1 : home2} alt="" />
            <div >首页</div>
          </div>
        </div>
      </div>
      <div className='nav-item' onClick={() => { toNav('/mine',1)}}>
        <img className="nav-icon" src={props.active !== 0 ? user1 : user2} alt="" />
        <div>我的</div>
      </div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </div>
    </div>
  )
}

export default Tabber

