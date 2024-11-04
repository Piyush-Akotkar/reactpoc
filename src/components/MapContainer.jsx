import React from 'react'
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = () => {
    const position = [51.505, -0.09];

    return (
        <div>
            <LeafletMap center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        A sample marker at the map center.
                    </Popup>
                </Marker>
            </LeafletMap>
        </div>
    )
}

export default MapContainer