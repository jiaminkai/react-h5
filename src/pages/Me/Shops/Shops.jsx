import React from 'react'
import NavBars from "@/components/NavBar/NavBar"

function Shops(){
  return(
    <div>
      <NavBars sticky right={false}  left={false} title={'我的店铺'} />
      <div className='pa-5 bg-gg' style={{height:'100vh'}}>
        <div className='bg-w flex-column border-round-samll pa-0-10' >
          <div className='border-b pa-15-0 flex   '>
            <div className='max-200'>店铺名称</div>
            <div className='max-200'>关联发货账号</div>
          </div>
          {[1,2,4,5,3].map(item=>{
            return(
            <div key={item} className='border-b pa-15-0 flex'>
              <div className='max-200 one-row-hidden'>德国意大利</div>
              <div className='max-200 one-row-hidden'>Qing Xiang-DE</div>
            </div>
            )
          })}

          
        </div>
      </div>
    </div>
  )
}

export default Shops