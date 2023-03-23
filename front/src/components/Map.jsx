import React from 'react'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const Map = ({coordinates}) => {

  const coo = coordinates;  //este valor se debería colocar en el map (center y position) una vez 
                                    //las coordenadas de cada sitio estén en el back            
  return (
    <div id="map">
<MapContainer center={[6.246817711889091, -75.57580707747566]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[6.246817711889091, -75.57580707747566]}>
    {/* <Popup>
       aqui se puede poner info llamativa del sitio
    </Popup> */}
  </Marker>
</MapContainer>
    </div>
    )
}

export default Map