import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './index.css'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'


export const Maps = (props) => {
	const { markers, client } = props

	const icon = L.icon({ 
		iconRetinaUrl:iconRetina, 
		iconUrl: iconMarker, 
		shadowUrl: iconShadow 
	}); 

	return (
    <>
      <MapContainer 
        center={[43.238949, 76.889709]} 
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
				{
					markers?.map((item, index) => {
						const coords = JSON.parse(item?.coords)
						const lat = coords?.lat
						const long = coords?.long
						return (
							<Marker position={[lat, long]} key={index} className='marker' icon={icon}>
								<Popup className='popup-marker'>
									<div>ID: {item?.id}</div>
									<div>Название: {client}</div>
									<div>Тип: {item?.delivery_type === 'delivery' ? 'Доставка' : 'Забор'}</div>
									<div>Стоимость: {item?.price}</div>
								</Popup>
							</Marker>
						)
					})
				}
      </MapContainer>
    </>
  )
}