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

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        <p><strong>pH-Wert:</strong> {region.details.pH}</p>
                        <p><strong>Gesamthärte:</strong> {region.details.gesamthaerte} °dH</p>

                        <p><strong>Gesamtalkalinität / Karbonathärte:</strong> {region.details.gesamtAlkalinitaet_Karbonathaerte} mg/L</p>
                        <p><strong>Zink:</strong> {region.details.zink} mg/L</p>

                        <p><strong>Freies Chlor & Brom:</strong> {region.details.freiesChlor_Brom} mg/L</p>
                        <p><strong>Eisen:</strong> {region.details.eisen} mg/L</p>

                        <p><strong>QUAT / QAC:</strong> {region.details.quat_qac} mg/L</p>
                        <p><strong>Kupfer:</strong> {region.details.kupfer} mg/L</p>

                        <p><strong>Blei:</strong> {region.details.blei} mg/L</p>
                        <p><strong>Quecksilber:</strong> {region.details.quecksilber} mg/L</p>

                        <p><strong>Nitrat:</strong> {region.details.nitrat} mg/L</p>
                        <p><strong>Nitrit:</strong> {region.details.nitrit} mg/L</p>

                        <p><strong>Chlor gesamt:</strong> {region.details.chlorGesamt} mg/L</p>
                        <p><strong>Mangan:</strong> {region.details.mangan} mg/L</p>

                        <p><strong>Sulfat:</strong> {region.details.sulfat} mg/L</p>
                        <p><strong>Fluoride:</strong> {region.details.fluoride} mg/L</p>
                    </div>
                </p>
            </div>
        </div>
    );
}
