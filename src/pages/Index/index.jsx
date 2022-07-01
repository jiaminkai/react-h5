import Home from "../Home";
import Me from "../Me/me.jsx"
import Tabber from "../../components/TabberNav/TabberNav";
import { Link, Outlet } from "react-router-dom"
import { useLocation } from 'react-router'
import { useEffect ,useState} from "react";
function Index() {
  let route = useLocation()
  const [active, setActive] = useState(0)
  useEffect(()=>{
    console.log('route: ', route);
    if(route.pathname==='/mine'){
      setActive(1)
    }else{
      setActive(0)
    }
  })
  return (
    <>
      <Tabber active={active} />
      <Outlet />
    </>
  )
}
export default Index