import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useMedia } from "../hooks/useMedia";

const url = "http://3.128.29.96:8080/"

  const requestProducts = await axios.get(`${url}producto`)
  .then(result => result.data)
  .catch((err) => {
    console.log(err);
  });

  const requestCategories = await axios.get(`${url}categoria`)
  .then(result =>result.data)
  .catch((err) => {
    console.log(err);
  });
  
  

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const isMobile = useMedia();
  const [products, setProducts] = useState("")
  const [categories, setcategories] = useState("")

  useEffect(() => {
    setProducts(requestProducts);
    setcategories(requestCategories)
  }, [])
  
  return (

    <GlobalContext.Provider value={{isMobile,products,categories}}>
      {children}
    </GlobalContext.Provider>
   
  )
}
