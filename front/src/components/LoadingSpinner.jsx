import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const LoadingSpiner = () => {
  return (
    <div style={{padding:"15px"}}>
    <TailSpin
    color='#FBC02D'></TailSpin>
    </div>

  )
}

export default LoadingSpiner