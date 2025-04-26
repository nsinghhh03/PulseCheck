import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Login from './pages/Login';
import Home from './pages/Home';
import MoodCheck from './pages/MoodCheck';
import SleepCheck from './pages/SleepCheck';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/mood" element={<MoodCheck />} />
                <Route path="/sleep" element={<SleepCheck />} />
            </Routes>
        </Router>
    );
}

export default App;
