import "./Home.css";
import { animateScroll as scroll } from "react-scroll";

function Home() {
  const scrollToProduct = () => {
    const element = document.getElementById("product-container");

    scroll.scrollTo(element.offsetTop);
  };

  return (
    <div className="home-container" id="home-container">
      <div className="leftside">
        <div className="header-text">NEW ARRIVALS</div>
        <div className="home-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus
          mollis venenatis. Praesent id scelerisque tellus, vitae elementum
          neque. Morbi pretium nulla eu tortor interdum, vitae egestas eros
          maximus. Duis eget nisi semper, iaculis justo a, sodales tellus. Morbi
          pulvinar, velit a porttitor bibendum, justo tortor lacinia ex, a
          molestie lacus est id velit. Sed blandit luctus sem, sed tristique
          lectus laoreet vitae. Aenean rhoncus magna id sodales tempus.
        </div>
        <button className="explore-btn" onClick={scrollToProduct}>
          Explore
        </button>
      </div>
      <div className="rightside">IMAGE HERE</div>
    </div>
  );
}

export default Home;
