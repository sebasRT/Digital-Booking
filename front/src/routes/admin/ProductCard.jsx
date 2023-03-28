import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../../styles/Cards.css"
const ProductCard = ({id,title,idCategory,city,img}) => {
    const category = () =>{

        switch (idCategory) {
            case 1:
                return "Hotel"
            case 2:
                return "Apartamento"
            case 3:
                return "Hostel"
            case 4:
                return "Bed and Breakfast"
                break;
        
            default:
                break;
        }
    }
  return (
    <div  className='productCard container-card' id={`product${id}`}>
        <div className="container-img" style={{backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
        <div className='container-detail'>

        <h4>titulo: <span>{title}</span></h4>
        <h4>categoría: <span>{category()}</span></h4>
        <h4>ciudad: <span>{city}</span></h4>
        </div>
        <FontAwesomeIcon icon={faTrash} className="icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
    </div>
  )
}

export default ProductCard