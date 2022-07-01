import React from "react";
import { useState } from "react";
import NavBar from "@/components/NavBar/NavBar"
function StockCenter(){
  const [active ,setActive]  = useState(0)
  const right = ()=>{
    return(
      <div></div>
    )
  }

  return(
    <div>
        <NavBar title={'备货计划'} right={right}></NavBar>
    </div>
  )
}
export default StockCenter