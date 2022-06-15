import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginFrom from './LoginFrom'
import store from '../../store/index'
import './login.less'

function Login(props) {
    return (
        <div className="login">  
            <div className='login-from'>
                <div className='from-hea'>
                    <div className='from-icon'></div>
                    <div className='from-title'>75°ERP系统</div>
                </div>
                <div className='from-sheet'>
                     <LoginFrom  {...props}></LoginFrom>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoginUp: () => {
            dispatch({
                type: 'login_up'
            })
        }
    }
}


export default connect(null, mapDispatchToProps)(Login);