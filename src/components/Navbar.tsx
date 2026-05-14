import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// ScrollSmoother replacement using native smooth scrolling
export let smoother: {
  scrollTop: (val: number) => void;
  paused: (val: boolean) => void;
  scrollTo: (target: string, smooth: boolean, position: string) => void;
};

const Navbar = () => {
  useEffect(() => {
    // Free alternative to ScrollSmoother - use native smooth behavior
    smoother = {
      scrollTop: (_val: number) => {
        window.scrollTo({ top: _val, behavior: "smooth" });
      },
      paused: (val: boolean) => {
        document.body.style.overflow = val ? "hidden" : "auto";
      },
      scrollTo: (target: string, _smooth: boolean, _position: string) => {
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
    };

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let section = element.getAttribute("data-href");
        if (section) {
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/images/ys-logo.svg" alt="YS" className="navbar-logo" />
        </a>
        <a
          href="mailto:yashsharmacbsa@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          yashsharmacbsa@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
