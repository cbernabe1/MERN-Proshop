import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './assets/bootstrap.custom.css'
import './assets/index.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductSreen from './screens/ProductSreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path="/" element={<HomeScreen/>}/>
      <Route path="/product/:id" element={<ProductSreen/>}/>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
