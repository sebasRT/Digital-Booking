import axios from "axios";
import { createContext, useEffect } from "react"
import { useMedia } from "../hooks/useMedia";



export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
  const isMobile = useMedia();

 const products = ()=>{
  axios.get("http://3.128.29.96:8080/producto")
  .then(result =>{console.log(result);})
  .catch((err) => {
    console.log(err);
  });
 }
 products()
  return (

    <GlobalContext.Provider value={{isMobile}}>
      {children}
    </GlobalContext.Provider>
   
  )
}
