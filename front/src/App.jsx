import { useContext, useState } from 'react'
import Header from './components/Header'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { SignUp } from './routes/SignUp'
import { Products } from './routes/Products'
import { Results } from './routes/Results'
import Product from './routes/Product'
import { GlobalContext } from './assets/global.context'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<div id='app'>
    <Header></Header>
    <Outlet></Outlet>
  
    <Footer></Footer></div>}>

    <Route path='/' element= {<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    <Route path='/products'element={<Products></Products>}></Route>
    <Route path='/product/:id' element={<Product></Product>}></Route>
    <Route path='/results' element={<Results></Results>}></Route>
  </Route>

  )
)


function App() {
  const {products} = useContext(GlobalContext);
  console.log(products);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
