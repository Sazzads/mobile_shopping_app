import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import './index.css'
import './App.css'
import { Provider } from 'react-redux'
import { configureStore} from '@reduxjs/toolkit'
import productReducer, { productFetch } from './features/productSlice.js'
import { productsApi } from './features/productsApi.js'

const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(productsApi.middleware),
});
store.dispatch(productFetch())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
