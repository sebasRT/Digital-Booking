import { useState } from 'react'
import Header from './components/Header'
import {BrowserRouter, Outlet, Route, Routes, } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { SignUp } from './routes/SignUp'
import { Products } from './routes/Products'
function App() {
  const [count, setCount] = useState(0)
  
  return (
<BrowserRouter>
<div id='app'>
  <Header></Header>

    <Routes>

      <Route path='/' element= {<Home></Home>}></Route>

  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signUp' element={<SignUp></SignUp>}></Route>
  <Route path='/products'element={<Products></Products>}></Route>
  <Route path='search/:id'></Route>
    </Routes>
  <Outlet></Outlet>

  <Footer></Footer>

</div>
</BrowserRouter>
  
  )
}

export default App
