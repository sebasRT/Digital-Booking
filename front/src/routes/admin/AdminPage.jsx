import React, { useContext } from 'react'
import { GlobalContext } from '../../assets/global.context'
import ProductCard from './ProductCard';

const AdminPage = () => {
    const {products} = useContext(GlobalContext);
    
  return (
    <div id='adminPage'>
        <div className='cards-container'>

    {Object.keys(products).map((product)=>{const pro = products[product];
    return <ProductCard key={`product${pro.idproductos}`} 
                        id={pro.idproductos}
                        title={pro.titulo}
                        idCategory={pro.categoria.idcategorias} 
                        city={pro.ciudad.nombre}
                        img={pro.imagenPrincipal}
                        description={pro.descripcion}
    ></ProductCard>
        })}
        </div>

    </div>
  )
}

export default AdminPage