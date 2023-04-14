import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Form, Navigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../assets/global.context'
import Navigator from '../../components/Navigator'

const ProductEditor = () => {
  const {id} = useParams()
  const {url} = useContext(GlobalContext)
  const [product, setProduct] = useState({})
  // const [images, setImages] = useState()
  const [edited, setEdited] = useState(false)

useEffect(() => {
    axios.get(`${url}producto/id/${id}`)
    .then((e)=>setProduct(e.data))
    .catch((e)=>console.log(e));

  }, [])
  
//   useEffect(() => {
    
//     setImages([product.imagenes])
//     console.log(images);
// }, [product])

const handleProduct =(e)=>{
  switch (e.target.title) {
    case "titulo":
      setProduct({...product,titulo:e.target.value});
      break;
      case "descripcion":
      setProduct({...product,descripcion:e.target.value});
        
        break;
      case "imagenPrincipal":
      setProduct({...product,imagenPrincipal:e.target.value});
        
        break;
      case "ubicacion":
      setProduct({...product,ubicacion:e.target.value});
        
        break;
      default:
      break;
  }
  
}


// const handleImages = (e)=>{
//   switch (e.target.title) {
//     case "img1":
//       setProduct({...product,imagenes:[{url:e.target.value}]});
//       break;
//     case "img2":
//       setImages([...images, images[1]={...images[1],url:e.target.value}]);
//         break;
//     case "img3":
//       setImages([...images, images[2]={...images[2],url:e.target.value}]);
//       break;
//     case "img4":
//       setImages([...images, images[3]={...images[3],url:e.target.value}]);
//       break;
//     case "img5":
//       setImages([...images, images[4]={...images[4],url:e.target.value}]);
//       break;

//     default:

//       break;
//   }
// }

// useEffect(() => {
//   console.log(images);
// }, [images])

const putProduct = ()=>{
  axios.put(`${url}producto/${id}`,product).
  then(e=>{setProduct(e.data), setEdited(true)}).
  catch(e=>console.log(e))
}
  return (
    <>
      <Navigator title={`Editar ${product.titulo}`}></Navigator>
    {
      edited? <Navigate to="/admin"></Navigate>:
      (
        <div className='product-editor'>
    
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
    
              <div className='editItem'>
              <label htmlFor="titulo">Titulo</label>
              <input type="text" title='titulo' placeholder={product.titulo}  onChange={handleProduct}/>
              </div>  
    
              <div className='editItem'>
              <label htmlFor="descripcion">Descripción</label>
              <input type="text" title='descripcion' placeholder={product.descripcion} onChange={handleProduct}/>
              </div>
      
              <div className='editItem'>
              <label htmlFor="ubicacion">Ubicación</label>
              <input type="text" title='ubicacion' placeholder={product.ubicacion} onChange={handleProduct}/>
              </div>
                
              <div className='editItem'>
              <label htmlFor="imagenPrincipal">Imagen principal</label>
              <input type="text" title='imagenPrincipal' placeholder={product.imagenPrincipal} onChange={handleProduct}/>
              </div>
    
            </div>
            {/* <div >
              <h5>Imagenes</h5>
    
              {product.imagenes && product.imagenes.map((img,index)=>{
                return <input type="text" title={`img${index+1}`} placeholder={img.url} alt={img.url}  className='imgInput' onChange={handleImages} />})}
    
              <input type="text" title='img1' placeholder='imagen 2' className='imgInput' />
    
              <input type="text" title='img3' placeholder='imagen 3' className='imgInput' />
    
              <input type="text" title='img4' placeholder='imagen 4' className='imgInput' />
    
              <input type="text" title='img5' placeholder='imagen 5' className='imgInput' /> 
    
            </div>  */}
    
    
    
            <button onClick={putProduct} className='saveChangesButton'> Guardar cambios</button>
        </div>
    
      )

    }
    </>
  )
}

export default ProductEditor