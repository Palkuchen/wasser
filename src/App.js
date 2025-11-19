import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Contribute from './pages/Contribute';
import RegionDetail from "./pages/RegionDetail";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suche" element={<Search />} />
                <Route path="/beisteuern" element={<Contribute />} />
                <Route path="/region/:id" element={<RegionDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
