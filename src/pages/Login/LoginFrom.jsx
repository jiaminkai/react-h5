import {
    Form,
    Input,
    Button,

} from 'antd-mobile'
import { useState } from 'react'

function LoginFrom() {
const [form] = Form.useForm()
    
    return (
        <>
            <Form
                layout='horizontal'
                form={form}
                initialValues={{
                    username:'admin',
                    password:''
                  }}
                footer={    
                    <Button block type='submit' onClick={()=>{submit(form)}} color='primary' size='large'>
                        提交
                    </Button>
                }
            >
                <Form.Item label='用户名' name='username'>
                    <Input placeholder='请输入用户名' clearable />
                </Form.Item>
                <Form.Item label='密码' name='password' rules={[{ required: true }, { validator: checkMobile }]}>
                    <Input placeholder='请输入密码' clearable type='password' />
                </Form.Item>
            </Form>
        </>
    )
}

const submit = (form)=>{
    console.log("提交",form)
    
}
const checkMobile = ()=>{

}

export default LoginFrom