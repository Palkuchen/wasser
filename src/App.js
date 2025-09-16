import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Contribute from './pages/Contribute';
import Misc from './pages/Misc';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suche" element={<Search />} />
                <Route path="/beisteuern" element={<Contribute />} />
                <Route path="/sonstiges" element={<Misc />} />
            </Routes>
        </Router>
    );
}

export default App;
