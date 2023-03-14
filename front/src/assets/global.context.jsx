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


  

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const isMobile = useMedia();
  const [products, setProducts] = useState("")
  const [categories, setcategories] = useState("")

  useEffect(() => {
    async function getProducts (){
      const response = await axios.get(`${url}producto`)
      console.log(response)
      setProducts(response.data)
    }
    getProducts()

    async function getCategories (){
      const response = await axios.get(`${url}categoria`)
      console.log(response)
      setcategories(response.data)
    }
    getCategories()
    // async function 
  }, [])
  
  return (

    <GlobalContext.Provider value={{isMobile,products,categories}}>
      {children}
    </GlobalContext.Provider>
   
  )
}
