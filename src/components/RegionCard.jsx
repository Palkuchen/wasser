export default function RegionCard({ region }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            width: '90%',
            textAlign: 'center'
        }}>
            <h3>{region.name}</h3>
            <p>Wasserqualität: {region.quality}</p>
            <p>Letzter Test: {region.lastTest}</p>
        </div>
    );
}
