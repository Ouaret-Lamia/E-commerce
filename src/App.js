import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {product} from './data'
import Home from './pages/home/home'
import Shirts from './pages/Categories/shirt'
import Lounge from './pages/Categories//lounge'
import Jackets from './pages/Categories/jacket'
import Dress from './pages/Categories/dress'
import Pant from './pages/Categories/pant'
import Product from './pages/Product Pages/product'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shirt' element={<Shirts/>}/>
        <Route path='/lounge' element={<Lounge/>}/>
        <Route path='/jacket' element={<Jackets/>}/>
        <Route path='/dress' element={<Dress/>}/>
        <Route path='/pant' element={<Pant/>}/>
        <Route path='/product/:id' element={<Product products={product}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
