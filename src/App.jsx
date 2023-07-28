import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Cart from './Containers/Cart/Cart';
import Main from './Components/Main/Main';
import AddEditProduct from './Containers/AddEditProduct/AddEditProduct';
import Products from './Containers/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Main />}/>
          <Route path='/store' element={<Products />} />
          <Route path='/store/:id/edit' element={<AddEditProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/create-product' element={<AddEditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;