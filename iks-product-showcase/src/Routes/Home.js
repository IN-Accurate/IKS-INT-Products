import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";

export const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Product />
      <Footer />
    </div>
  );
};
