import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts';


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
