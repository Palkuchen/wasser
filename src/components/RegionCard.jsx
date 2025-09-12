export default function RegionCard({ region }) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
            <h3>{region.name}</h3>
            <p>Wasserqualität: {region.quality}</p>
            <p>Letzter Test: {region.lastTest}</p>
        </div>
    );
}
