import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css';
import Dashboard from './Pages/Dashboard';
import CartProductList from './Pages/CartProductList';
import MakeAndOrder from './Pages/MakeAndOrder';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>

 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/cart-description' element={<CartProductList/>}/>
      <Route path="/make-the-oder" element={<MakeAndOrder/>}/>
    </Routes>
    <Footer/>
    </>
  );
}


export default App;
