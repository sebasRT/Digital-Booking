import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../assets/global.context'

export const useLogged = () => {
    const [logged, setLogged] = useState(true)
    const {url} = useContext(GlobalContext)
    const [user, setUser] = useState(
      {email: localStorage.getItem("email"),
        password: localStorage.getItem("password") 
      }
    )
    
// useEffect(() => {
//   const jsonUser = JSON.stringify(user);
//   axios.get(`${url}login`,jsonUser).then((e)=>{
//     console.log(e.data);
//   })
// }, [])

  return ({logged,user})
}
