
import './App.less';
//移动端px适配  
import '@/utils/rem.js';
//全局样式规范
import '@/utils/common.scss';
import store from './store';
import 'reset-css';
import { Provider } from 'react-redux';
import Routers from './routers/index.jsx';
import { ifLoginFn  } from './hoc';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routers />
      </div>
    </Provider>

  );
}
export default ifLoginFn(App)
