

import React from "react";
import { UpOutline,DownOutline,PictureOutline } from 'antd-mobile-icons'
import { useState } from "react";
function Card(props) {
  console.log('props: ', props);
  
  const [show , setShow]  = useState(true)
  return(
    <>
      <div className="flex-column bg-w ra-10 ma-b15" style={{'padding':' 15px'}}>
        <div className={['flex-row-sb f-al-center',!show?'pa-b10':''].join(' ')} onClick={()=>{setShow(!show)}} >
          <div className="fo-14">{props.list.title||'标题'}</div>
          <div  className={[!show?'rotatUp':'rotatRight']}> <DownOutline fontSize={14} /></div>
        </div>
        <div className={['grid-c-4',show?'card-min ':'card-max border-t'].join(' ')}>
          {props.list.list.map(item=>{
          return (
            <div className="card-item-item flex-column-center f-ju-se">
              <PictureOutline fontSize={40} />
              <div>{item.name}</div>
            </div>
          )
          })}
        </div>
      </div>
    </>
  )

}
export default Card

