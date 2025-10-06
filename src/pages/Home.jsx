import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegionCard from '../components/RegionCard';
import WaterSearchbar from "./WaterSearchbar";

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

    const handleSearch = (query) => {
        console.log("Suche nach:", query); // Debug
        const result = regions.filter(r =>
            r.name.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(result);
    };

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
            <h1 style={{ marginBottom: '1rem' }}>🔍 Regionale Wassertests finden</h1>
            <p style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
                Gib den Namen eines Gewässers oder Ortes ein, um verfügbare Wassertests zu durchsuchen. Du kannst z. B. „Watenbüttel“ oder „Weiher“ eingeben.
            </p>

            <WaterSearchbar onSearch={handleSearch} />

            {filtered.length === 0 ? (
                <p style={{ marginTop: '2rem', color: '#666' }}>
                    Keine Region gefunden. Bitte überprüfe deine Eingabe.
                </p>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '1000px',
                    marginTop: '2rem'
                }}>
                    {filtered.map(region => (
                        <div key={region.id} onClick={() => handleClick(region.id)} style={{ cursor: 'pointer' }}>
                            <RegionCard region={region} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
