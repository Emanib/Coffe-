
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
export const Map = () => {
    return (
<MapContainer center={[31.952162, 35.233154]} zoom={13} scrollWheelZoom={false} style = {{width: "100%",
  height: "100vh"}} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[31.952162, 35.233154]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      );
}
 
export default Map;