import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../assets/global.context'

export const useLogged = () => {
  
    const [logged, setLogged] = useState(false)
    const {url} = useContext(GlobalContext)
    const [admin, setAdmin] = useState(false)
    const name = localStorage.getItem("name")
    const [user, setUser] = useState(
      {email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      }
    )
    
useEffect(() => {
  const jsonUser = JSON.stringify(user);
  axios.post(`${url}login`,jsonUser).then((e)=>{
  e.status == 200? setLogged(true):setLogged(false);
  e.data[0] == "fconiglio100@gmail.com" ? setAdmin(true): null;})
  .catch(e=>{console.log(e);})
})

  return ({logged,name,admin})
}
