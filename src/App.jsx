import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts';
import OneProduct from './pages/OneProduct';


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/actors' element={<OneProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
