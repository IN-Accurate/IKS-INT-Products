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
        <div className="header-text">Learning Beyond Walls</div>
        <div className="home-content">
          An online event that encouraged aspiring writers within the Section to
          share their experience and achievements as a valuable member of the
          organisation, providing them an opportunity to showcase their skills
          while inspiring peers and fellow members to utilise their memberships
          in the best possible way. To find out more about the event and its
          entries check out our official Instagram handle.
        </div>
        <button className="explore-btn" onClick={scrollToProduct}>
          Explore
        </button>
      </div>
      <div className="rightside">
        <img
          src="https://interns.ieeekerala.org/assets/img/portfolio/lbw.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
