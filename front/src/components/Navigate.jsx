import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigator = ({title}) => {

    const history = useNavigate()
  return (
    <div className="adminHeader" >
      
    <h3>{title}</h3>
    <button onClick={()=>history(-1)} className='go-backButton'><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></button>
      </div>

  )
}

export default Navigator