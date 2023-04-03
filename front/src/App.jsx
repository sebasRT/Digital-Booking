import Header from './components/Header'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { SignUp } from './routes/SignUp'
import { Products } from './routes/Products'
import { Results } from './routes/Results'
import Product from './routes/Product'
import Booking from './routes/Booking'
import ReservaExitosa from './routes/ReservaExitosa'
import ScrollToTop from './assets/ScrollToTop'
import AdminPage from './routes/admin/AdminPage'
import ProductEditor from './routes/admin/ProductEditor'
import CreateProduct from './routes/admin/CreateProduct'
import CreacionExitosa from './routes/CreacionExitosa'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<div id='app'>

    <Header></Header>
    <Outlet></Outlet>
    <ScrollToTop></ScrollToTop>
    <Footer></Footer></div>}>

    <Route path='/' element= {<Home></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
    <Route path='/products'element={<Products></Products>}></Route>
    <Route path='/product/:id' element={<Product></Product>}></Route>
    <Route path='/results' element={<Results></Results>}></Route>

    {/* ------------------ Rutas de reservación ------------------- */}

    <Route path='/booking/:id' element={<Booking></Booking>}></Route>
    <Route path='/reservaExitosa' element={<ReservaExitosa></ReservaExitosa>}></Route>

    {/* ------------------- Rutas de Administrador ---------------- */}
    <Route path='/admin' element={<AdminPage></AdminPage>}></Route>
    <Route path='/admin/edit/:id' element={<ProductEditor></ProductEditor>}></Route>
    <Route path='/admin/create' element={<CreateProduct></CreateProduct>}></Route>
    <Route path='/creacionExitosa' element={<CreacionExitosa></CreacionExitosa>}></Route>
  </Route>

  )
)


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
