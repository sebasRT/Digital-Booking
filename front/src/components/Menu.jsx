import React, { useEffect, useState } from 'react'
import { Button1 } from './Button1'
import "../styles/Menu.css"
export const Menu = () => {
    const [open, setOpen] = useState(false)
    const openHandle = ()=> setOpen(prev => !prev)

    useEffect(() => {
      const closeDropDown = e => {
        if (e.target.id != "menuButton") {
            setOpen(false);
        }}

      document.body.addEventListener("click",closeDropDown);
      return () => {
        document.body.removeEventListener("click",closeDropDown)
      }
}, [])
    
  return (
    <div>
      <button className='menuButton' onClick={openHandle} ><img src="./src/icons/menu.svg" id="menuButton"/></button>
      <div className={`dropdown-menu ${open? "active": "unactive"}`} id="dm">
          <Button1 link={'/login'} text={"login"}></Button1>
          <Button1 link={'signUp'} text={'sign up'}></Button1>
        </div>
    </div>

  )
}
