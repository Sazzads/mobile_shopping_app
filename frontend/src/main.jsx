import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import './index.css'
import './App.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import productReducer, { productFetch } from './features/productSlice.js'
import { productsApi } from './features/productsApi.js'
import cartReducer from './features/cartSlice.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});
store.dispatch(productFetch())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
