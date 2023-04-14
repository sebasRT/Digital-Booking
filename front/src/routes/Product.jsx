import React, { useContext, useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../assets/global.context';
import { Button1 } from '../components/Button1';
import { useMedia } from '../hooks/useMedia';
import '../styles/Product.css';
import cards from '../assets/cards.json';
import Map from '../components/Map';
import { useLogged } from '../hooks/useLogged';
import Politicas from '../components/booking/Politicas';
import disponibilidades from '../assets/disponibilidades.json';
import Navigator from '../components/Navigator';
import { Modal } from 'react-bootstrap';



const Product = () => {
  const [tituloFotos, setTituloFotos] = useState("1/5");
  const { logged } = useLogged(); //esta funcion me comprueba si el usuario ya esta loggueado o no
  const { id } = useParams();
  const { products } = useContext(GlobalContext);
  const product = products.find((e) => e.idproductos == id);
  const disponibilidad = disponibilidades[id];
  const allCards = cards;
  const ref = useRef();
  


const handleShowMore = () => {
  setShowModal(true);
}

const handleCloseModal = () => {
  setShowModal(false);
}

  
  const handleClick = () => {
    handleShowMore();
  }
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    // una vez las imágenes estén en el back: cambiar "allCards" por product.images
    //                    ||             
    const cardsImages = allCards.find((e)=> e.id == id).images
    const coordinates = allCards.find((e)=> e.id == id).coordinates
    const media = useMedia();
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    // Una vez las fechas disponibles estén en el back: cambiar este array por la info en el back
    //                                             ||
    const [values, setValues] = useState(disponibilidad)
    const [showModal, setShowModal] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(1);
    const scrollImages = (scrollOffset) => {
      const imagesContainer = document.querySelector(".images-container2");
      imagesContainer.scrollLeft += scrollOffset;
      const currentIndex = Math.round(imagesContainer.scrollLeft / imagesContainer.clientWidth);
      setCurrentPhotoIndex(currentIndex);
      setTituloFotos(`${currentIndex + 1}/${Object.keys(cardsImages).length}`);
    };
    

    return (
      <div ref={ref} style={{paddingBottom:"70px"}}>
        <Navigator title={product.titulo}></Navigator>
        <div className='div-contenedor'>
          <div className='images-zone'>
            <div className='images-container-wrapper'>
              <div className='images-container'>
                {
                  Object.keys(cardsImages).map((e)=>{
                    return(
                      <div
                        className={`image${e} image`}
                        key={e}
                        style={{
                          backgroundImage:`url(${cardsImages[e]})`,
                          backgroundSize:"cover",
                          backgroundPosition:"center",
                          width:"100px"
                        }}
                      ></div>
                    )
                  })
                }
              </div>
              <div>
              {showModal && (
  <div className="overlay" onClick={handleCloseModal}></div>
)}

<div className='see-more-container'>
  <button className='see-more-button' onClick={handleShowMore}>Ver más</button>
  </div>
  <Modal show={showModal} onHide={handleCloseModal} centered>
  <div className="overlay" onClick={handleCloseModal}></div>
  <Modal.Body className='alert' style={{ backgroundColor: 'rgb(255 255 255)', height: '63vh', margin: '10%', border: '8px' }}>
    <div className='alert2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(85vh - 105px)' }}>
      <button className='button-salir' onClick={handleCloseModal}>
        <img src='https://cdn-icons-png.flaticon.com/512/5368/5368396.png' alt='Salir' />
      </button>
      <div className='images-zone2'>
        <div className='buttons2'>
          <button className='button-anterior2' onClick={() => scrollImages(-500)}></button>
          <div className='images-container2'>
            {Object.keys(cardsImages).map((e) => {
              return (
                <div className={`image${e} image`} key={e} style={{backgroundImage:`url(${cardsImages[e]})`, backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition:"center", width:"100px"}}>
                </div>
              )
            })}
          </div>
          <button className='button-siguiente2' onClick={() => scrollImages(500)}></button>
        </div>
        <div className='tituloFotos'>{tituloFotos}</div>
        <div className='images-container3'>
          {Object.keys(cardsImages).map((e, index) => {
            return (
              <div className={`image3${e} image3 ${index === 0 ? "hidden" : ""}`} key={e} style={{backgroundImage:`url(${cardsImages[e]})`, backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition:"center", width:"100px"}}>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </Modal.Body>
</Modal>

              <div className='see-more-container'>
                <button className='see-more-button' onClick={handleClick}>Ver más</button>
              </div>
            </div>
          </div>

          <div className='description-container'>
          {/* <h3>aquí va titulo de descripcion</h3> */}
          <br />
          {product.descripcion}
        </div>



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
      numberOfMonths={media ? 1 : 2}
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
</div>
)
}

export default Product