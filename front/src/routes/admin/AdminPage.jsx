import React, { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { GlobalContext } from '../../assets/global.context'
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AdminPage.css"
import Navigator from '../../components/Navigator';
import axios from "axios";

const AdminPage = () => {
    const [products, setProducts] = useState({})
    const { url } = useContext(GlobalContext)

    useEffect(() => {
      axios.get(`${url}producto`).then((response)=>{
        setProducts(response.data)
      }).catch((error)=>{
        console.log(error)
      })

    return () => {
      setProducts({})}
    
    }, [])

  return (
    <div id='adminPage'>
      <Navigator title="Administracion"></Navigator>
     
        <Link to="create" ><div className='createButton'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></div></Link>
        <div className='cards-container editableProducts-box'>
    {Object.keys(products).map((product)=>{const pro = products[product];
    return <ProductCard key={`product${pro.idproductos}`} 
                        id={pro.idproductos}
                        title={pro.titulo}
                        idCategory={pro.categoria.idcategorias} 
                        city={pro.ubicacion}
                        img={pro.imagenPrincipal}
                        description={pro.descripcion}
    ></ProductCard>
        })}
        </div>

    </div>
  )
}

export default AdminPage