import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Product from "../../components/Product/Product";

export const HomePage = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Product />
    </div>
  );
};
