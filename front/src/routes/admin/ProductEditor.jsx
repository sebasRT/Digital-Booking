import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import { GlobalContext } from '../../assets/global.context'

const ProductEditor = () => {
  const {id} = useParams()
  const {url} = useContext(GlobalContext)
  const [product, setproduct] = useState({})



useEffect(() => {
    axios.get(`${url}producto/id/${id}`)
    .then((e)=>setproduct(e.data))
    .catch((e)=>console.log(e));
    
}, [])



  return (
    <div className='product-editor'>
        <Form method='put' action=''>

        </Form>
    </div>
  )
}

export default ProductEditor