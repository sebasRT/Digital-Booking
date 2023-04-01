import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import "../styles/Calendar.css"
import { useMedia } from '../hooks/useMedia'

export const Calendar = ({name,onChange,value}) => {
    
    
    const media = useMedia();
    
  return (
   
   
            <DatePicker
            containerStyle={{width:'100%'}}
            placeholder='Check In - Check Out'
            name={name}
            range
            rangeHover
            value={value}
            numberOfMonths={media? 1 : 2}
            onChange={onChange}
            className={`yellow `}
            multiple={true}
            minDate={new Date()}
            ></DatePicker>
  )
}

