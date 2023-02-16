import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { productsdata } from './api/api';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Checkout from './pages/Checkout';
import PrivateRoute from './privateRoute/PrivateRoute';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import app from './firebase/firebase.config';

const Main = ({ cartItems }) => {
  return (
    <div>
      <Header cartItems={cartItems} />
      <Outlet />
      <Footer />
    </div>
  )
}


// const auth = getAuth(app);
function App() {




  const [cartItems, setCartItems] = useState([]);


  //Add to cart functionality
  const handleAddtoCart = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      const newCartItems = cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
  }



  const handleDelete = (product) => {

    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      const newCartItems = cartItems.filter(x => x.id !== product.id);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }
    else {
      const newCartItems = cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x);
      setCartItems(newCartItems);
      saveProductLocalstorage(newCartItems);
    }

  }


  const handleDeleteproduct = (productItem) => {
    const exists = cartItems.find((x) => x.id === productItem.id);
    if (exists) {
      const product = cartItems.filter(x => x.id !== productItem.id);
      setCartItems(product);
      saveProductLocalstorage(product);
    }

  }


  //Save cart details to localstorage for each interaction for addTocart and delete functionality
  const saveProductLocalstorage = cart => {
    if (cart) {
      localStorage.setItem('CartItem', JSON.stringify(cart));
    }
  }


  //Get cart details from Local Storage
  useEffect(() => {
    const localData = localStorage.getItem('CartItem');
    setCartItems(localData ? JSON.parse(localData) : []);
  }, []);

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Main cartItems={cartItems} />}>
        <Route index element={<Home cartItems={cartItems} handleAddtoCart={handleAddtoCart} handleDelete={handleDelete} />} loader={productsdata}>
        </Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} handleDelete={handleDelete} handleDeleteproduct={handleDeleteproduct} handleAddtoCart={handleAddtoCart} />}>
        </Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout ></Checkout></PrivateRoute>}>
        </Route>
      </Route>
      <Route path="/signin" element={<Signin />}>
      </Route>
      <Route path="/signup" element={<Register />}>
      </Route>
    </>
  ))




  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
