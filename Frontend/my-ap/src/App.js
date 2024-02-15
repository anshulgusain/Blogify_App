
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AllRoutes from './Routes/AllRoutes';
// import Header from './Components/header';



function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>



  )
}

export default App