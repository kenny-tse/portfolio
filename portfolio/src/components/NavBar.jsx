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

  const scrollToSkillSets = () => {
    scroller.scrollTo("SkillSetContainer", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100
    });
  };

  return (

    <div id="NavBar">
      <button className="navBarButton" onClick={scrollToTop}>
        Introduction
      </button>
      <button className="navBarButton" onClick={scrollToProjects}>
        Projects
      </button>
      <button className="navBarButton" onClick={scrollToSkillSets}>
        Skills
      </button>
    </div>

  )

}

export default NavBar;