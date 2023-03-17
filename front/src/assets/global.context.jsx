
import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useMedia } from "../hooks/useMedia";

const url = "http://localhost:8080/"
  
let chargedCounter = 0; 
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const isMobile = useMedia();
  const [products, setProducts] = useState("")
  const [categories, setcategories] = useState("")
  const [productsRandom, setproductsRandom] = useState("")
  const [charged, setCharged] = useState(false)

  const handleCharged =()=>{
    if (chargedCounter > 5) {
      setCharged(true)
    }
  }

  useEffect(() => {
    async function getProducts (){
      const response = await axios.get(`${url}producto`)
      chargedCounter = chargedCounter+1; 
      handleCharged()
      setProducts(response.data)
    }
    getProducts()

    async function getProductsRandom (){
      const response = await axios.get(`${url}producto/random`)
      chargedCounter = chargedCounter+1; 
      handleCharged()
      setproductsRandom(response.data)
    }
    getProductsRandom()

    async function getCategories (){
      const response = await axios.get(`${url}categoria`)
      chargedCounter = chargedCounter+1; 
      handleCharged()
      setcategories(response.data)
    }
    getCategories()

    // async function 
  }, [])
  
  return (

    <GlobalContext.Provider value={{isMobile,products,categories,charged,productsRandom}}>
      {children}
    </GlobalContext.Provider>
   
  )
}
