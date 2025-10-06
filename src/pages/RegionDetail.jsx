import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RegionDetail() {
    const backgroundImage = '/images/salzgittersee.jpg';
    const { id } = useParams();
    const [region, setRegion] = useState(null);

    useEffect(() => {
        fetch(`/api/tests/${id}`)
            .then(res => res.json())
            .then(data => setRegion(data));
    }, [id]);

    if (!region) return <p>Lade Region...</p>;

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                color: '#fff',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '2rem',
                    borderRadius: '12px',
                    maxWidth: '600px',
                    textAlign: 'center',
                }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{region.name}</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                    Wasserqualität: <strong>{region.quality}</strong>
                </p>
                <p>
                    Der Watenbüttel Weiher ist ein beliebtes Naherholungsgebiet mit ruhiger Atmosphäre und guter Wasserqualität.
                    Die letzte Messung vom <strong>{region.lastTest}</strong> bestätigt die Eignung für Freizeitaktivitäten wie Angeln und Spazieren.
                </p>
            </div>
        </div>
    );
}
