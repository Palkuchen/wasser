export default function RegionCard({ region }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '12px',   // runde Ecken
            padding: '1rem',
            marginBottom: '1rem',
            width: '90%',
            textAlign: 'center'
        }}>
            <h3>{region.name}</h3>

            {region.quality && (
                <p>Wasserqualität: {region.quality}</p>
            )}

            <p>Letzter Test: {region.lastTest}</p>
        </div>
    );
}