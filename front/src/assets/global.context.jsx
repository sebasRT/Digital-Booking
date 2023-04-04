
import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { useMedia } from "../hooks/useMedia";


const url = "http://3.128.29.96:8080/"

  
let chargedCounter = 0; 
const cities = [{value: "1" , label:"Medellin" , url:"https://th.bing.com/th/id/OIP.tbcWW_fVhVDkREphOv73PQHaEK?pid=ImgDet&rs=1"},
                {value: "6" , label:"Guatape" , url:"https://th.bing.com/th/id/R.b99448e6136351458327eaeeaff1c745?rik=mKDg5xF6zylRdA&pid=ImgRaw&r=0"},
                {value: "2" , label:"Bogota" , url:"https://th.bing.com/th/id/OIP.aplC2LNw5i3RJAcXzINHvgHaE0?pid=ImgDet&rs=1"},
                {value: "3" , label:"San Andres", url:"https://th.bing.com/th/id/OIP.u6Ky_XTzzg2aNuKoHPgu0gHaFf?pid=ImgDet&rs=1"},
                {value: "4" , label:"Cali" , url:"https://th.bing.com/th/id/R.2e264acb6ea9c79674e9c2ccdde7bc63?rik=YKTNbHWGmQVoHQ&pid=ImgRaw&r=0"},
                {value: "7" , label:"Manizales" , url:"https://www.cronicadelquindio.com/files/noticias/20110226072344.jpg"},
                {value: "5" , label:"Santa Marta" , url:"https://megaconstrucciones.net/images/urbanismo/foto29/santa-marta-98.jpg"}]

const caracteristica= [{id: "1" , titulo: "Wi-Fi",urlImagen:"./icons/agregar.svg" },
                        {id: "2" , titulo: "Wi-Fi",urlImagen:"./icons/agregar.svg" }]

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  // localStorage.setItem("email","fconiglio100@gmail.com")
  // localStorage.setItem("password","password")
  // localStorage.setItem("name","Fabrizzio")
  const isMobile = useMedia();

  
  const [products, setProducts] = useState("")
  const [categories, setcategories] = useState("")
  const [productsRandom, setproductsRandom] = useState("")
  const [charged, setCharged] = useState(false)

  const handleCharged =()=>{
    if (chargedCounter > 2) {
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

    <GlobalContext.Provider value={{isMobile,products,categories,charged,productsRandom,url,cities,caracteristica}}>
      {children}
    </GlobalContext.Provider>

  )
}
