import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;
