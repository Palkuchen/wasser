import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            width: '100%',
            maxWidth: '500px'
        }}>
            <input
                type="text"
                placeholder="Suche Region..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ flex: 1, padding: '0.5rem' }}
            />
            <button style={{ padding: '0.5rem 1rem' }}>Filter</button>
        </div>

    );
}
