
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<shopcategory category="mens"/>}/>
        <Route path='/womens' element={<shopcategory category="women"/>}/>
        <Route path='/kids' element={<shopcategory category="kid"/>}/>
        <Route path="/product" element={<product/>}>
          <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginsignup/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
