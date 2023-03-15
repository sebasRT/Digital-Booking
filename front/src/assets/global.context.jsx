import { counter } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useMedia } from "../hooks/useMedia";

const url = "http://localhost:8080/"

  
  const requestProducts =async()=> await axios.get(`${url}producto`)
  .then(result => result.data)
  .catch((err) => {
    console.log(err);})


  const requestCategories =async()=> await axios.get(`${url}categoria`)
    .then(result =>result.data)
    .catch((err) => {
      console.log(err);})


  
let chargedCounter = 0; 
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const isMobile = useMedia();
  const [products, setProducts] = useState("")
  const [categories, setcategories] = useState("")
  const [charged, setCharged] = useState(false)

  const handleCharged =()=>{
    if (chargedCounter > 3) {
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

    <GlobalContext.Provider value={{isMobile,products,categories,charged}}>
      {children}
    </GlobalContext.Provider>
   
  )
}
