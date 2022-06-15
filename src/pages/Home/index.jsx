import { Link, Outlet } from "react-router-dom"
import { useEffect, useLocation, useState } from "react"
import { connect } from 'react-redux'

function handleClick(props) {
    console.log("Home:", props)
    props.SendStore('send_add')

}
function Home(props) {
    return (
        <div>
            <br />
            <div onClick={() => { handleClick(props) }}>我是Home页面</div>
            {/* <div >{state}</div> */}
            <br />
            <Link className='link' to="child" > Tachilidb1</Link>
            <Link className='link' to="child2" > Tachilidb1</Link>
            <Outlet />
        </div>
    )
}
const MapDispatch = (dispatch) => {
    return {
        SendStore: () => {
            dispatch({
                type: 'send_add'
            })
        }
    }
}
const setList = (stateProps, dispatchProps, ownProps) =>{
    return Object.assign( stateProps, dispatchProps, ownProps)
}
export default connect(null, MapDispatch,setList)(Home)