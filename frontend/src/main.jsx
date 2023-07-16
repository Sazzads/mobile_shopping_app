import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import './App.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import productReducer, { productFetch } from './features/productSlice.js'

const store = configureStore({
  reducer: {
    products: productReducer
  }
});
store.dispatch(productFetch())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
