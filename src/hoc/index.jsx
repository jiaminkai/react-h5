import {Component, useEffect} from 'react'
import {  useNavigate} from 'react-router-dom'

export const ifLoginFn = (Comp) => {
    // 定义一个判断登录的高阶组件，在需要判断登录的页面套上这个组件
    return function(){
        const navigate = useNavigate()
        useEffect(()=>{
            let token = localStorage.getItem('TOKEN');
            if(!token){
                navigate("/login")
            }
        },[])
        return( <Comp />)
    }
}