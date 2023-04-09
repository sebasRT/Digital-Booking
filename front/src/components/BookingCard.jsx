import React from 'react'

const BookingCard = ({img,place,checkIn,checkOut,hour,id}) => {
  return (
    <div className='container-card'>
      
      <div className="container-img" style={{backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
      
      
      <div className='container-detail'>
        <h4>{place}</h4>
       <div> <strong>check-in:</strong><span> {checkIn}</span></div>

        <div><strong>check-out:</strong><span> {checkOut}</span></div>
      </div>

    </div>
  )
}

export default BookingCard