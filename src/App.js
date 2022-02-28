import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Locations from './components/Locations/Locations';
import Home from './pages/Home/Home';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="locations" element={<Locations />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
