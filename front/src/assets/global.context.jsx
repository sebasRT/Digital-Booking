import { createContext } from "react"
import { useMedia } from "../hooks/useMedia";
const Themes = {
    A:{
        color1:'#F0572D',
        color2:'#31363F',
        color3:'#191B1D',
        color4:'#DFE4EA'

    },
    B:{
        color1:'#1DBEB4',
        color2:'#383B58',
        color3:'#545776',
        color4:'#F3F1ED'
    },
    C:{
        color1:'#FBC02D',
        color2:'#263238',
        color3:'#607D8B',
        color4:'#FFFBE2'
    }
}

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
  const isMobile = useMedia();
  return (

    <GlobalContext.Provider value={{isMobile}}>
      {children}
    </GlobalContext.Provider>
   
  )
}
