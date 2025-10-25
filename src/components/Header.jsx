import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={{ backgroundColor: '#d00', color: '#fff', padding: '1rem' ,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <nav>
                <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Projekt</Link>
                <Link to="/suche" style={{ marginRight: '1rem', color: '#fff' }}>Suche</Link>
                <Link to="/beisteuern" style={{ marginRight: '1rem', color: '#fff' }}>Beisteuern</Link>
                <Link to="/sonstiges" style={{ color: '#fff' }}>Sonstiges</Link>
            </nav>
        </header>
    );
}
