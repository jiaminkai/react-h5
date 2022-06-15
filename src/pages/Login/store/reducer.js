import isEmpty from 'lodash/isEmpty';
const initState = {
    isLogin: false,
    user: {}
};


export default (state = initState, action) => {
    switch (action.type) {
        case 'token':
            return {
                isAuth: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
};