
import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useLogged } from "../hooks/useLogged";
import { useMedia } from "../hooks/useMedia";


const url = "http://3.128.29.96:8080/"
  
let chargedCounter = 0; 
const cities = [{value: "1" , label:"Medellin"},
                {value: "6" , label:"Guatape"},
                {value: "2" , label:"Bogota"},
                {value: "3" , label:"San Andres"},
                {value: "4" , label:"Cali"},
                {value: "7" , label:"Manizales"},
                {value: "5" , label:"Santa Marta"}]

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  localStorage.setItem("email","fconiglio100@gmail.com")
  localStorage.setItem("password","password")
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

    <GlobalContext.Provider value={{isMobile,products,categories,charged,productsRandom,url,cities}}>
      {children}
    </GlobalContext.Provider>

  )
}
