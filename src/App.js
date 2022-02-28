import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Locations from './components/Locations/Locations';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Login from './pages/Login/Login';


function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Features" element={<Features />} />
          <Route path="locations" element={<Locations />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
