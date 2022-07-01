import { Link, Outlet } from "react-router-dom"
import { useEffect, useLocation, useState } from "react"
import { RightOutline } from 'antd-mobile-icons'
import { Avatar } from 'antd-mobile'
import { SafeArea } from 'antd-mobile'
import { useNavigate } from "react-router-dom"
import './index.less'
function Mine(props) {
    let navigate = useNavigate()
    function JumpPage (path){
        console.log(path)
        return navigate(path)
    }
    return (
        <div className="bg-gray MeBox">
            <div style={{ background: '#ededed' }}>
                <SafeArea position='top' />
            </div>
            <div className="bg-w pa-t10 flex-column" >
                <div className="b-bottom flex pa-15">
                    <Avatar src='' style={{ '--size': '80px' }} />
                    <div className="flex-column f-ju-se  ma-l20 " style={{ height: '80px' }}>
                        <div className="fo-16 text-left bold">张燕与</div>
                        <div className="fo-14 text-left">喜马拉雅</div>
                    </div>
                </div>
                <div className="b-bottom flex text-left f-ju-sb f-al-center  pa-15" onClick={()=>{JumpPage('/shops')}}>
                    <div>我的店铺</div>
                    <RightOutline />
                </div>
                <div className="flex f-ju-sb text-left f-al-center pa-15" onClick={()=>{JumpPage('/account')}}>
                    <div>我的账号</div>
                    <RightOutline />
                </div>
            </div>
        </div>
    )
}


export default Mine