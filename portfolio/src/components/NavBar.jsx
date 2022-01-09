import './navBar.scss';
import { scroller } from "react-scroll";
import { scrollToSection } from './componentHelpers';

const NavBar = (props) => {

  const scrollToTop = () => {
    scroller.scrollTo("App", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -300
    });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("ProjectsContainer", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100
    });
  };

  return (

    <div id="NavBar">
      <div onClick={scrollToTop}>
        Introduction
      </div>
      <div onClick={scrollToProjects}>
        Projects
      </div>
      <div>
        Placeholder
      </div>
    </div>

  )

}

export default NavBar;