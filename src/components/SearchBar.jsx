import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    return (
        <div style={{ margin: '1rem' }}>
            <input
                type="text"
                placeholder="Suche Region..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => onSearch(query)}>Filter</button>
        </div>
    );
}
