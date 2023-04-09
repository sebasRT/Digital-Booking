import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../assets/global.context'

export const useLogged = () => {
  
    const [logged, setLogged] = useState(false)
    const {url} = useContext(GlobalContext)
    const [admin, setAdmin] = useState(false)
    const name = localStorage.getItem("name")
    const [usuario, setUsuario] = useState()
    const [user, setUser] = useState(
      {
    
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),

      }
    )
    
useEffect(() => {
  const jsonUser = JSON.stringify(user);
  axios.post(`${url}login`,jsonUser).then((e)=>{
    e.status == 200? setUsuario(e.data): console.log("no existe usuario");
  e.status == 200? setLogged(true):setLogged(false);
  e.data[0] == "team11@dh.co" ? setAdmin(true): null;})
  .catch(e=>{e.message.includes("401")? console.log("no user"): console.log(e);;})
},[])

  return ({logged,name,admin,usuario})
}
