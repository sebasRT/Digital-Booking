import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()
  return (
    <div>Product id : {GetProductById2}</div>
  )
}

export default Product