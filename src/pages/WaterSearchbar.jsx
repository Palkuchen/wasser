import React, { useState } from 'react';

export default function WaterSearchbar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query)
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Region oder Gewässer eingeben…"
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    width: '250px'
                }}
            />
            <button
                type="submit"
                style={{
                    marginLeft: '1rem',
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '6px',
                    backgroundColor: '#0077cc',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer'
                }}
            >
                Filter
            </button>
        </form>
    );
}
