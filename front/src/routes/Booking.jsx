import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context';

//  product= { "idproductos": 1,
//   "titulo": "Dorado la 70",
//   "ubicacion": "Blvr. Libertadores De América #70 #44B-66",
//   "descripcion": "Un lugar exclusivo y moderno para sus estadías de negocios y de entretenimiento en Medellín. Ubicado estratégicamente sobre el corredor turístico de la carrera 70, en el barrio Florida Nueva",
//   "imagenes": [],
//   "categoria": {
//       "idcategorias": 1,
//       "titulo": "Hoteles",
//       "descripcion": "Hoteles de Colombia",
//       "url_imagen": "https://img.nh-hotels.net/KPZV/014DN/original/RE_NH_royal-urban-93_014.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white"
//   },
//   "disponibilidad": "SI",
//   "politicas": null,
//   "caracteristicas": [
//       {
//           "idcaracteristicas": 1,
//           "descripcion": "[\"Gimnasio\",\"Terraza Bar\",\"Turco\"]",
//           "imagen": null
//       }
//   ],
//   "ciudad": {
//       "idciudades": 1,
//       "nombre": "Medellin"
//   }

 // }
const Booking = () => {
    const {id}= useParams()
    const {products} = useContext(GlobalContext);
    const product = products.find((e)=>e.idproductos == id );

  return (
    <div>Booking : {id}
    <h2>
      {product.titulo} <br />
      {product.categoria.titulo} <br />
      {product.ciudad.nombre} <br />
      {product.descripcion} <br />
    </h2>
    </div>
  )
}

export default Booking