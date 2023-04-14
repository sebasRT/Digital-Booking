import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../assets/global.context'
import "../../styles/Cards.css"
import "./AdminPage.css"
import Modal from '../../components/Modal'

const ProductCard = ({id,title,idCategory,city,img}) => {
    const {url} = useContext(GlobalContext)
    const [advertOpened, setAdvertOpened] = useState(false)
    const [deleted, setDeleted] = useState(false)
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

    const deleteOption = ()=>{
        
        setAdvertOpened(true)
    }

    const deleteProduct =()=>{
        axios.delete(`${url}producto/${id}`).then(e=>{console.log(e); setDeleted(true)})
        
    }
    const cancelDelete = ()=> setAdvertOpened(false)
  return (
    <div  className='productCard container-card' id={`product${id}`}>
        <div className="container-img" style={{backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
        <div className='container-detail'>

        <Modal isOpen={advertOpened} cancel={cancelDelete} proceed={deleteProduct} deleted={deleted} >
            {
                deleted? <h1>Eliminado correctamente</h1> : 
                ( <><h2>seguro que quieres eliminar el elemento: id {id} </h2>
                    <h3>{title}</h3>
                </>
                            )
            }
            
        </Modal>

        <h4>titulo: <span>{title}</span></h4>
        <h4>categoría: <span>{category()}</span></h4>
        <h4>ciudad: <span>{city}</span></h4>
        </div>
        <div className='buttons-container'>
        <div onClick={deleteOption}><FontAwesomeIcon icon={faTrash} className="editorIcon"></FontAwesomeIcon></div>
        <div ><Link to={`edit/${id}`}>
        <FontAwesomeIcon icon={faPencil} className="editorIcon"></FontAwesomeIcon>
        </Link>
       
        </div>
        </div>
    </div>
  )
}

export default ProductCard