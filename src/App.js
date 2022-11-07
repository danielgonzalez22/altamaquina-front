import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WebsiteLayout from './layouts/WebsiteLayout'

import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Products />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}
export default App;
