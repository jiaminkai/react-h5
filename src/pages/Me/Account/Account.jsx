import React from 'react'
import NavBars from "@/components/NavBar/NavBar"

function Account(){
  return(
    <div>
      <NavBars sticky right={false}  left={false} title={'我的账号'} />
      <div className='pa-5 bg-gg' style={{'height':'100vh'}}>
        <div className='bg-w flex-column border-round-samll pa-15'>
            <div className='fo-16 c-000 text-left bold ma-b15'>Qing Xiang-DE</div>
            <div className='flex-center f-ju-sb ma-b15'>
              <div className='fo-14 c-000'>隶属组长：马瑶</div>
              <div className='fo-14 c-000 max-200 one-row-hidden text-right'>生产接单员：尚梦莎</div>
            </div>
            <div className='fo-14 c-00 text-left ma-b15'>生产仓库：3号仓库</div>
            <div className='fo-14 c-00 text-left pa-l50'>备注：Fantasnight 品亿-DE</div>
        </div>
      </div>
    </div>
  )
}

export default Account