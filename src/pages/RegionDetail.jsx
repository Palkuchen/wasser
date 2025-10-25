import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function RegionDetail() {
    const { id } = useParams();
    const [region, setRegion] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`/api/tests/image/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const blob = await response.blob(); // Get the image as a Blob
                const imageUrl = URL.createObjectURL(blob); // Create a URL for the Blob
                setBackgroundImage(imageUrl);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchImage();

        // Clean up the object URL when the component unmounts
        return () => {
            if (backgroundImage) {
                URL.revokeObjectURL(backgroundImage);
            }
        };
    }, [id]);

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
                    {region.quality === 'Mies' ? (
                        <>
                            Der {region.name} hat leider eine schlechte Wasserqualität.
                            Aufgrund der letzten Messung vom <strong>{region.lastTest}</strong> wird von Freizeitaktivitäten wie Baden und Schwimmen abgeraten.
                        </>
                    ) : region.quality === 'Mittel' ? (
                        <>
                            Der {region.name} ist ein Naherholungsgebiet mit mäßiger Wasserqualität.
                            Freizeitaktivitäten sind eingeschränkt möglich, insbesondere Baden und Angeln.
                            Die letzte Messung vom <strong>{region.lastTest}</strong> lässt vom Trinken und Angeln abraten.
                        </>
                    ) : (
                        <>
                            Der {region.name} ist ein beliebtes Naherholungsgebiet mit ruhiger Atmosphäre und {region.quality === 'Sehr gut' ? 'exzellenter' : 'guter'} Wasserqualität.
                            Die letzte Messung vom <strong>{region.lastTest}</strong> bestätigt die Eignung für Freizeitaktivitäten wie Angeln und Spazieren.
                        </>
                    )}
                </p>

            </div>
        </div>
    );
}
