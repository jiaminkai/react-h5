import logo from './logo.svg';
import './App.less';
import '@/utils/rem.js';

import 'reset-css';
import Routers from './routers/index.jsx';
function App() {  
  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
