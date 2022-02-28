import './App.css';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
