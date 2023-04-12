import React, { useEffect, useState } from 'react'
import { Button1 } from './Button1'
import "../styles/Menu.css"
import { useLogged } from '../hooks/useLogged';
import { useMedia } from '../hooks/useMedia';

export const Menu = () => {
    const [open, setOpen] = useState(false)
    const openHandle = () => setOpen(prev => !prev)
    const { logged, name, admin } = useLogged();
    const isMobile = useMedia();
    const [nombre, setNombre] = useState("")

    const closeSession = () => {
      localStorage.removeItem("name")
      localStorage.removeItem("email")
      localStorage.removeItem("password")
      localStorage.removeItem("jwt")
      localStorage.removeItem("lastname")
      window.location.href = '/';
    }

    useEffect(() => {
      const closeDropDown = e => {
        if (e.target.id != "menuButton") {
            setOpen(false);
        }
      }
      setNombre(name)
      document.body.addEventListener("click",closeDropDown);
      return () => {
        document.body.removeEventListener("click",closeDropDown)
      }
    }, [])
    
    return (
      <div className='menu'>
  {logged && (
  <div className="user-info" style={{ alignItems: 'center' }}>
    <div style={{ backgroundColor: '#263238', borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: '25px', fontWeight: 'bold', textTransform: 'uppercase', color: 'white' }}>
        {nombre.substring(0, 1)}{localStorage.getItem('lastname') && localStorage.getItem('lastname').substring(0, 1)}
      </span>
    </div>
    <div className="user-name" style={{ fontSize: '18px' }}>
  <p style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold'}}>Hola,</p>
  {`${nombre.charAt(0).toLocaleUpperCase()}${nombre.slice(1).toLocaleLowerCase()} ${localStorage.getItem('lastname') ? localStorage.getItem('lastname').charAt(0).toLocaleUpperCase() + localStorage.getItem('lastname').slice(1).toLocaleLowerCase() : ''}`}
</div>
  </div>
)}


        <div className="menu-button-container">
          <button className='menuButton' onClick={openHandle} >
            <img src="./src/icons/menu.svg" id="menuButton"/>
          </button>
          <div className={`dropdown-menu ${open? "active": "unactive"}`} style={{width: `${isMobile?"80vw": "20vw"}`}} id="dm">
            {
              logged ? (
                <>
                  {admin?  <><Button1 text="Edita Productos" link={`admin`}></Button1>
                  <Button1 text="Todas las reservas" link={`allBookings`}></Button1>
                  <Button1 text="Tus reservas" link={`bookings`}></Button1></>
                  : <Button1 text="Mis reservas" link={`bookings`}></Button1>}
                  <button onClick={closeSession} type="button" className="botonCerrar">Cerrar sesión</button>
                </>
              ) : (
                <>
                  <Button1 link={'/login'} text={"login"}></Button1>
                  <Button1 link={'signUp'} text={'sign up'}></Button1>
                </>
              )
            }
          </div>
        </div>
      </div>
    )
    
    
}
