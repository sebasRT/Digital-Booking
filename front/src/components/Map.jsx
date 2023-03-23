import React from 'react'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const Map = ({coordinates,title}) => {

  const coo = [coordinates.lat,coordinates.long];  //este valor se debería colocar en el map (center y position) una vez 
                                               //las coordenadas de cada sitio estén en el back            
  return (
    <div id="map">
<MapContainer center={coo} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={coo}>
   <Popup>
       {title}
    </Popup>
  </Marker>
</MapContainer>
    </div>
    )
}

export default Map
