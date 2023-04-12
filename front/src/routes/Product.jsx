import React, { useContext, useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-multi-date-picker'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context'
import { Button1 } from '../components/Button1'
import { useMedia } from '../hooks/useMedia'
import "../styles/Product.css"
import cards from "../assets/cards.json" 
import Map from '../components/Map'
import { useLogged } from '../hooks/useLogged'
import Politicas from '../components/booking/Politicas'
import disponibilidades from '../assets/disponibilidades.json'
import Navigate from '../components/Navigate'


const Product = () => {
    const {logged} = useLogged() //esta funcion me comprueba si el usuario ya esta loggueado o no
    const {id} = useParams()
    const {products} = useContext(GlobalContext);
    const product = products.find((e)=>e.idproductos == id );
    const disponibilidad = disponibilidades[id]
    const allCards = cards
    const ref = useRef();
    
    useEffect(() => {
      window.scrollTo(0, 0);
      console.log(product);
    }, []);

    // una vez las imágenes estén en el back: cambiar "allCards" por product.images
    //                    ||             
    const cardsImages = product.imagenes.map(e=>e.url)
    const coordinates = allCards.find((e)=> e.id == id).coordinates
    const media = useMedia();
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    // Una vez las fechas disponibles estén en el back: cambiar este array por la info en el back
    //                                             ||
    const [values, setValues] = useState(disponibilidad)

  return (
    <div ref={ref} style={{paddingBottom:"70px"}}>

    <Navigate title={product.titulo}></Navigate>
        <div className='div-contenedor'>
      <div className='images-zone'>
        <div className='buttons'></div>
        <div className='images-container'>
           {
            Object.keys(cardsImages).map((e)=>{
             return(<div className={`image${e} image`} key={e} style={{backgroundImage:`url(${cardsImages[e]})`, backgroundSize:"cover", backgroundPosition:"center", width:"100px"}}>
            </div>)}
            )
           }     
        </div>
      </div> 

      <div className='description-container'>
        {/* <h3>aquí va titulo de descripcion</h3> */}
        <br />
           {product.descripcion}
      </div>

      <br />
      <div className='features'>
        <h2>¿Que ofrece este sitio?</h2>
<hr />
        {//aquí deberían ir todos los servicios que ofrece el sitio
        }
      </div>
      <br />

      <div className='bookingSpace'>
           
        <div className='calendar'>
          <h3>Dias disponibles: </h3>
          <Calendar
            multiple
            readOnly={true}
            value={values}
            numberOfMonths={media? 1 : 2}
            className={`yellow `}>
          </Calendar>
        </div>
        <div className='buttonPlace'>
          <h3>Agrega tus fechas de viaje para tener precios exactos</h3>
          {logged ? <Button1 link={`/booking/${id}`} text="Iniciar reserva"></Button1> : (<div>
            <Button1 link={"/login"} text={"Ingresa"}></Button1>
          <br />
          <h5>si aun no tienes cuenta:</h5>
          <Button1 link={"/signUp"} text={"Crea Cuenta"}></Button1>

          </div>)}
        </div>
      </div>
      <div className='location'>
           <h3>¿Donde vas a estar?</h3>
           <hr />
           <span>{product.ciudad.nombre}</span>
          <Map coordinates={coordinates}></Map>
          
      </div>
      </div>

      <Politicas></Politicas> 

    </div>
  )
}

export default Product