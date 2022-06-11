import {Link, Outlet } from "react-router-dom"

function Home(){
    return(
        <div>
            我是Home页面
            <br/>
            <Link className ='link' to="child" > Tachilidb1</Link> 
            <Outlet/>
        </div>
    )
}

export default Home