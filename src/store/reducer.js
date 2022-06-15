import { combineReducers } from 'redux';
import { reducer as loginReducer } from '../pages/Login/store';



// 组合所有的 reducer
export default combineReducers({
    login: loginReducer
});
// // 导出一个函数，用于返回state
// export default (state = defaultState, action) => {
//         switch(action.type){
//             case "send_type":
//                 return Object.assign({},state,action)
//                 break
//             case "send_action":
//                 return Object.assign({},state,action)
//                 break
//             case "send_add":
//                 return {currot:state.currot+1}
//                 break

//             default:
//                 return state;
//         }
   
// }