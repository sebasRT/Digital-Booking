import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../assets/global.context'
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AdminPage.css"

const AdminPage = () => {
    const {products} = useContext(GlobalContext);
    const history = useNavigate()
  return (
    <div id='adminPage'>
      <div className='adminHeader'>
        <h3>Administración</h3>
      <button onClick={()=>history(-1)} className='go-backButton'><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>

      </div>
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