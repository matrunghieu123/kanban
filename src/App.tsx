/** @format */

import { ConfigProvider } from 'antd';
import './App.css';
import Routers from './routers/Routers';

function App() {
  // provider
  return (
  <ConfigProvider 
    theme={{
      token:{
        colorTextHeading: '#009ED8'
      },
      components:{},
    }}
  >
    <Routers />
  </ConfigProvider>
  );
}

export default App;
