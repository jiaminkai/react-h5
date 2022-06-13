import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginFrom from './LoginFrom'
import store  from './store'
import './login.less'

function Login(props) {
    return (
        <div >
            <LoginFrom {...props}></LoginFrom>
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