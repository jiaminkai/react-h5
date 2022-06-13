
import './App.less';
import '@/utils/rem.js';
import store from './store';
import 'reset-css';
import { Provider } from 'react-redux';
import Routers from './routers/index.jsx';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routers />
      </div>
    </Provider>

  );
}

export default App;
