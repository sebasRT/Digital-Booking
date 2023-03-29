import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useLogged = () => {
    const [logged, setLogged] = useState(false)

    const [user, setUser] = useState(
      {username: "", 
      }
    )
useEffect(() => {
// axios.post
}, [])

  return (logged,user)
}
