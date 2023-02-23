import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import "react-multi-date-picker/styles/colors/yellow.css"
import { useMedia } from '../hooks/useMedia'

export const Calendar = (props) => {
    
    const [value, setValue] = useState("")
    const media = useMedia();
    
    function handleChange(value){
      setValue(value)
    }
  

  return (
    <div>
        <div className='rmdp-container'>
            <DatePicker
            placeholder='Check In - Check Out'
            range
            rangeHover
            value={value}
            numberOfMonths={media? 1 : 2}
            onChange={handleChange}
            className={`yellow `}
            multiple={true}
            minDate={new Date()}
            ></DatePicker>
        </div>
    </div>
  )
}
