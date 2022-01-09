import { scroller } from "react-scroll";

export let scrollToSection = (className) => {
  scroller.scrollTo(className, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};


