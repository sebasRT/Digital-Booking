import { useContext } from 'react'
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
import ReservaTemplate from './routes/ReservaTemplate'


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
    <Route path='/reservaTemplate' element={<ReservaTemplate></ReservaTemplate>}></Route>
  </Route>

  )
)


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
