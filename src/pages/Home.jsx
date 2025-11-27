import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RegionCard from '../components/RegionCard';
import WaterSearchbar from "./WaterSearchbar";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png'
});
export default function Home() {
    const [regions, setRegions] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/tests')
            .then(res => res.json())
            .then(data => {
                setRegions(data);
                setFiltered(data);
            });
    }, []);

    const handleClick = (regionId) => {
        navigate(`/region/${regionId}`);
    };

    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet/dist/leaflet.css" />
            <h1 style={{ marginBottom: '1rem' }}>🔍 Regionale Wassertests finden</h1>

            <MapContainer center={[52.25839652384204, 10.371563439265495]} zoom={13} style={{ height: '600px', width: '100%', marginTop: '2rem' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filtered.map(region => (
                    <Marker
                        key={region.id}
                        position={[region.latitude ?? 52.25839652384204, region.longitude ?? 10.371563439265495]}>
                        <Popup>
                            <span onClick={() => handleClick(region.id)}>{region.name}</span>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
