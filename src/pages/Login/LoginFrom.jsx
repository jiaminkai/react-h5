import {
    Form,
    Input,
    Button,
    Toast 
} from 'antd-mobile'
import { useState } from 'react'
import {  useNavigate, Link } from 'react-router-dom'
import {loginByAccessToken,getAccessToken,login} from '../../api/login'
function LoginFrom() {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [loginForm, setPass] = useState({username: '12345678910',
    password: 'wolfcode123'})
    const history =  useNavigate()
    const onFinish = (form) => {
        setLoading(true)
        login(loginForm).then((res)=>{
            console.log('res: ', res);
            const {data} = res
            setLoading(false)
            if (data.errCode === 0) {
                // 成功
                Toast.show({
                    icon: 'success',
                    content: '登录成功',
                  })
                  localStorage.setItem('TOKEN',data.data)
                  history('/home')
            }
        }).catch(res=>{
            console.log('err: ', res);
            Toast.show({
                icon: 'fail',
                content: '密码/账号错误',
              })
            setLoading(false)
        })
    }

    const passChange = (value)=>{
        setPass({username: 'lucy',
        pwd: value.trim()})
    }
    
    return (
        <>
            <Form
                layout='horizontal'
                form={form}
                onFinish={onFinish}
                initialValues={loginForm}
                footer={
                    <Button block type='submit' color='primary' loading={loading} loadingText='正在登录' size='large'>
                        登录
                    </Button>
                }
            >
                <Form.Item label='内测码' name='password' rules={[{ required: true }, { validator: checkMobile }]}>
                    <Input onChange={(value) => { passChange(value) }} placeholder='请输入密码' clearable type='password' />
                </Form.Item>
            </Form>
        </>
    )
}


const checkMobile = (_, value) => {
    if (!value) {
        return Promise.resolve();
    }
    if (value.length < 6) {
        return Promise.reject('请重新输入正确的内测码');
    }
    return Promise.resolve();
}

export default LoginFrom