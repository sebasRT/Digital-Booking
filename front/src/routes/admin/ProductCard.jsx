import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../assets/global.context'
import "../../styles/Cards.css"
import "./AdminPage.css"
import ProductEditor from './ProductEditor'
const ProductCard = ({id,title,idCategory,city,img}) => {
    const {url} = useContext(GlobalContext)
    const [editorOpened, setEditorOpened] = useState(false)

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
    const editProduct = ()=>{
        setEditorOpened(!editorOpened)
    }
    const deleteProduct = async()=>{
        const response = await axios.get(`${url}producto/id/${id}`)
        console.log(response.data);
    }
  return (
    <div  className='productCard container-card' id={`product${id}`}>
        <div className="container-img" style={{backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
        <div className='container-detail'>

        <h4>titulo: <span>{title}</span></h4>
        <h4>categoría: <span>{category()}</span></h4>
        <h4>ciudad: <span>{city}</span></h4>
        </div>
        <div className='buttons-container'>
        <div onClick={deleteProduct}><FontAwesomeIcon icon={faTrash} className="icon"></FontAwesomeIcon></div>
        <div onClick={editProduct}><Link to={`edit/${id}`}>
        <FontAwesomeIcon icon={faPencil} className="icon"></FontAwesomeIcon>
        </Link>
       
        </div>
        </div>
    </div>
  )
}

export default ProductCard