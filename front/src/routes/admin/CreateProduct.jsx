import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../../assets/global.context';
import "../../styles/CreateProduct.css"
import { useEffect } from 'react';
import axios from 'axios';
import "./AdminPage.css"
import Navigator from '../../components/Navigator';

const CreateProduct = () => {
  const [submit, setSubmit] = useState(false)
  const {url}= useContext(GlobalContext)

  //Estados de los primeros campos del form nombre,categoria,ciudad,direccion
  //Las ciudades y las categorias son traidas con el hook useEffect a traves de servicios que consumen la api

  const [nombrePropiedad, setNombrePropiedad] = useState("");
  const handleChangeNombrePropiedad = (event) => {
    setNombrePropiedad(event.target.value);
  };

  const [categorias, setCategorias] = useState([]);
  const [categoriaId, setCategoriaId] = useState(1);
  const handleChangeCategoriaId = (event) => {
    setCategoriaId(event.target.value);
  };

  const [direccion, setDireccion] = useState("");
  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const [ciudades, setCiudades] = useState([]);
  const [ciudadId, setCiudadId] = useState(1);

  const handleChangeCiudadId = (event) => {
    setCiudadId(event.target.value);
  };

  const [descripcion, setDescripcion] = useState("");
  const handleChangeDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  //estados de Agregar Politica
  const [normasDeCasa, setNormasDeCasa] = useState("");
  const handleChangeNormasDeCasa = (event) => {
    setNormasDeCasa(event.target.value);
  };
  const [saludYSeguridad, setSaludYSeguridad] = useState("");
  const handleChangeSaludYSeguridad = (event) => {
    setSaludYSeguridad(event.target.value);
  };
  const [politicasDeCancelacion, setPoliticasDeCancelacion] = useState("");
  const handleChangePoliticasDeCancelacion = (event) => {
    setPoliticasDeCancelacion(event.target.value);
  };

  const [politicasId, setPoliticasId] = useState([]);

  
  //Logica y estados de Checkbox de caracteristicas
  

  const [caracteristicas, setCaracteristicas] = useState([]);
  const [checkedState, setCheckedState] = useState(
    [1]
  );
  const handleChangeCaracteristicas = (position) => {
    const indexPosition=position
    const updatedCheckedState = checkedState.map((item, index) =>
      index === (indexPosition) ? !item : item
    );
    setCheckedState(updatedCheckedState);
    
  };


    //Logica y estados de Agregar Imagenes
 
    const [imagenUrl, setImagenUrl] = useState("");
    const handleChangeImagenUrl = (event) => {
      setImagenUrl(event.target.value);
    };
  
    const [imagenes, setImagenes] = useState([]);
    const [propiedades, setPropiedades] = useState([]);
    
    const[contadorIdImg,setContadorIdImg]= useState(1)

    useEffect(() => {
      console.log(imagenes);
    
    }, [imagenes])
    
    const agregarImagen = () => {
      if (imagenUrl.length !== "") {
        setImagenes([...imagenes, {
          id:contadorIdImg,
          url:imagenUrl
        }]);
        setContadorIdImg(contadorIdImg+1);
        setImagenUrl("");
      }
    };
  
    const quitarImagen = (id) => {
      let auxImg= [...imagenes].filter((e)=>e.id!==id)
      setImagenes(auxImg);    
    }; 
      
    //traer ciudades, categorias y caracteristicas



    const {categories} = useContext(GlobalContext);
    const {cities} = useContext(GlobalContext);
    const {caracteristica}= useContext(GlobalContext);
    
const [form, setform] = useState()

useEffect(() => {

  const form = {
    titulo: nombrePropiedad,
    ubicacion: "",
    descripcion: descripcion,
    imagenPrincipal: imagenUrl,
    imagenes: imagenes,    
    categoria: {
      idcategorias: categoriaId,
      titulo: "",
      descripcion: "",
      url_imagen: "",
    },
    disponibilidad: "",
    politicas:null,
    caracteristicas:[
      {
        idcaracteristicas: 1,
        descripcion: "Gimnasio,Terraza Bar,Turco",
        imagen: null
    }

    ]
    ,
    ciudad: {
      idciudades: ciudadId,
    }

    
  }
setform(form);

},[nombrePropiedad,categoriaId,descripcion,imagenUrl,imagenes,categoriaId,ciudadId])


let config = {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem("jwt")
  }
}
  const submitProduct =(e)=>{
    e.preventDefault()
    setSubmit(true); 

    axios.post(`${url}producto/register`,form,config)
    .then(e=>console.log(e), setSubmit(true))
    .catch(e=>console.log(e))

  }

  return (
    <>
    {
      submit? <Navigate to="/admin" /> : (
        <div>
        <Navigator title="Crear Producto"></Navigator>
  
        <div className="pantalla__creacionProducto--contenedor">
          <div className="pantalla__creacionProducto--contenedor__principal">
            <div className="creacionProducto__form">
              <form onSubmit={submitProduct}>
                <div className="formPrincipal">
                  <div className="input-box">
                    <label htmlFor="nombrePropiedad">
                      Nombre de la propiedad
                    </label>
                    <input
                      type="text"
                      name="nombrePropiedad"
                      id="nombrePropiedad"
                      placeholder="Hotel Hermirage"
                      value={nombrePropiedad}
                      onChange={handleChangeNombrePropiedad}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                      type="text"
                      name="categoria"
                      id="categoria"
                      placeholder="Hotel"
                      value={categoriaId}
                      onChange={handleChangeCategoriaId}
                      required
                      >
                      {Object.keys(categories).map(categori => {
                        const cat = categories[categori];                    
                        return(
                        <option value={cat.idcategorias} key={cat.idcategorias}>
                          {cat.titulo}
                        </option>)
                        }
                      )}
                    </select>
                  </div>
                  <div className="input-box">
                    <label htmlFor="direccion">Direccion</label>
                    <input
                      className="box-direccion"
                      type="text"
                      name="direccion"
                      id="direccion"
                      placeholder="Av. Colon 1643"
                      value={direccion}
                      onChange={handleChangeDireccion}
                      required
                    />
                  </div>
                  
                  <div className="input-box">
                    <label htmlFor="ciudad">Ciudad</label>
                    <select
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      placeholder="Ciudad"
                      required
                      value={ciudadId}                    
                      onChange={handleChangeCiudadId}
                    >
                      {Object.keys(cities).map((ciudad) => {
                        const city = cities[ciudad];
                        return(
                        <option value={city.value} key={city.value}>
                          {city.label}
                        </option>)
                      } )}
                    </select>
                  </div>
  
                  </div>
                  <div className="input-box2">
                  <label htmlFor="descripcion">Descripcion</label>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    placeholder="Escribir aquí"
                    cols="200"
                    rows="5"
                    value={descripcion}
                    onChange={handleChangeDescripcion}
                    />
                </div>
                <h4 className="creacionProducto__subtitulo">Agregar Atributos</h4>
                <div className="creacionProducto__contenedor__contraste">
                  {/* {imagenes.map(({id,url}) => {
                    return (
                      <div key={id} className="creacionProducto__felexContainer">
                      <div className="input-box2">
                        
                          <input
                            className="box-elemento-imagen"
                            type="text"
                            name="imagenUrl"
                            id={`imgurl-${id}`}
                            placeholder="WI-FI"
                            value={url}
                            disabled
                          />
                        </div>
                        <input type="button" className="botonQuitar" onClick={()=>quitarImagen(id)} />
                      </div>
                    );
                  })} */}
                  {/* <div className="creacionProducto__felexContainer">
                    <div className="input-box2" style={{ display:"flex",flexWrap:"nowrap",justifyContent:"space-around"}}>
                      <div className='input-new' style={ {width:"60%"}}>
                    <label htmlFor="Nombre">Nombre</label>
                      <input
                      
                      type="text"
                      name="nombre"
                      id="name"
                      placeholder="WIFI"
                        value={imagenUrl}
                        onChange={handleChangeImagenUrl}
                        />
                      </div>
                      <div className='input-new' style={ {width:"20%"}}>
                      <label htmlFor="Nombre">Icono</label>
                      <input
                        
                        type="text"
                        name="icono"
                        id="icono"
                        placeholder="FA-WIFI"
                        value={imagenUrl}
                        onChange={handleChangeImagenUrl}
                      />
                      </div>
                    </div>
                    <input
                      type="button"
                      className="botonAgregar"
                      onClick={agregarImagen}
                    />
                  </div> */}
                </div>
                <h4 className="creacionProducto__subtitulo">
                  Politicas del Producto
                </h4>
                <div className="creacionProducto__contenedor_politicas">
                  <div>
                    <h5 className="creacionProducto__subtitulo_inde">
                      Normas de la casa
                    </h5>
                    <div className="input-box2">
                      <label htmlFor="descripcion1">Descripcion</label>
                      <textarea
                        name="descripcion1"
                        id="descripcion1"
                        placeholder="Escribir aquí"
                        cols="100"
                        rows="10"
                        value={normasDeCasa}
                        onChange={handleChangeNormasDeCasa}
                        />
                    </div>
                  </div>
                  <div>
                    <h5 className="creacionProducto__subtitulo_inde">
                      Salud y seguridad
                    </h5>
                    <div className="input-box2">
                      <label htmlFor="descripcion2">Descripcion</label>
                      <textarea
                        name="descripcion2"
                        id="descripcion2"
                        placeholder="Escribir aquí"
                        cols="100"
                        rows="10"
                        value={saludYSeguridad}
                        onChange={handleChangeSaludYSeguridad}
                      />
                    </div>
                  </div>
                  <div>
                    <h5 className="creacionProducto__subtitulo_inde">
                      Políticas de cancelación
                    </h5>
                    <div className="input-box2">
                      <label htmlFor="descripcion3">Descripcion</label>
                      <textarea
                        name="descripcion3"
                        id="descripcion3"
                        placeholder="Escribir aquí"
                        cols="100"
                        rows="10"
                        value={politicasDeCancelacion}
                        onChange={handleChangePoliticasDeCancelacion}
                      />
                    </div>
                  </div>
                </div>
                <h4 className="creacionProducto__subtitulo">Cargar Imagenes</h4>
                <div className="creacionProducto__contenedor__contraste">
                  {imagenes.map(({id,url}) => {
                    return (
                      <div key={id} className="creacionProducto__felexContainer">
                        <div className="input-box2">
                          <input
                            className="box-elemento-imagen"
                            type="text"
                            name="imagenUrl"
                            id={`imgurl-${id}`}
                            placeholder="Insertar https://"
                            value={url}
                            disabled
                          />
                        </div>
                        <input type="button" className="botonQuitar" onClick={()=>quitarImagen(id)} />
                      </div>
                    );
                  })}
                  <div className="creacionProducto__felexContainer">
                    <div className="input-box2" style={{ marginTop: "15px" }}>
                      <input
                        
                        type="text"
                        name="imagenUrl"
                        id="imagenUrl"
                        placeholder="Insertar https://"
                        value={imagenUrl}
                        onChange={handleChangeImagenUrl}
                      />
                    </div>
                    <input
                      type="button"
                      className="botonAgregar"
                      onClick={agregarImagen}
                    />
                  </div>
                </div>
                <div className="contenedor_centrado">
                  <button type="submit" className="crearProducto" onClick={submitProduct}>Crear</button>
                </div>
  
                  </form>
                  </div>
                  </div>   
                  </div>
      </div>
      )  
     
    }
                        </>
  )
}

export default CreateProduct