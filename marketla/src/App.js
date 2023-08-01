
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;