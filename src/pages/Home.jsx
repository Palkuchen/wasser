import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RegionCard from '../components/RegionCard';

export default function Home() {
    const [regions, setRegions] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        fetch('/api/tests')
            .then(res => res.json())
            .then(data => {
                setRegions(data);
                setFiltered(data);
            });
    }, []);

    const handleSearch = (query) => {
        const result = regions.filter(r =>
            r.name.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(result);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <SearchBar onSearch={handleSearch} />
            {filtered.map(region => (
                <RegionCard key={region.id} region={region} />
            ))}
        </div>

    );
}
