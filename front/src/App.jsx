import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { SignUp } from './routes/SignUp'
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
    </Routes>
  {/* <Route></Route> */}

  <Outlet></Outlet>

  <Footer></Footer>

</div>
</BrowserRouter>
  
  )
}

export default App
