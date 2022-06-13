
import React, { useContext, useEffect } from 'react'
import { Button, ErrorBlock } from 'antd-mobile'
import { useLocation } from 'react-router-dom'
import {useSelector,useDispatch,useStore} from 'react-redux'
const ThemeContext = React.createContext();

function Dfinder() {
  const {state:type} = useLocation()
  let value = type?.type || '';
  const  dispatch2 = useDispatch()
  const store2 = useStore()
  console.log('store2: ', store2);
console.log('dispatch2: ', dispatch2);
     const contextType=useSelector(state => state);
  console.log('text: ', contextType);
  useEffect(() => {
    document.body.style.background = '#ffffff'
  }, [])
  switch (value) {
    case '404':
      return <ErrorBlock fullPage />
    case 'error':
     return <ErrorBlock
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        style={{
          '--image-height': '150px',
        }}
        description={
          <span>
            Customize <a href='#API'>Description</a>
          </span>
        }
      >
        <Button color='primary'>Create Now</Button>
      </ErrorBlock>
     default:
      return   <ErrorBlock fullPage />
  }
}

export default Dfinder