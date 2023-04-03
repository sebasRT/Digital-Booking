import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../assets/global.context'
import ProductCard from './ProductCard';

const AdminPage = () => {
    const {products} = useContext(GlobalContext);
    
  return (
    <div id='adminPage'>

<Link to="create" ><button className='createButton'></button></Link>
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