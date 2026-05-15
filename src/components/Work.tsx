import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "ShivvayOS",
    category: "AI Workforce Orchestration",
    tools: "Next.js, Python, FastAPI, CrewAI, LangGraph",
    preview: "https://shivvayos.vercel.app",
    image: null,
    link: "https://shivvayos.vercel.app",
  },
  {
    title: "AI Learning Companion",
    category: "AI System",
    tools: "Python, ML, React, Node.js",
    preview: "https://learning-companion-two.vercel.app",
    image: null,
    link: "https://learning-companion-two.vercel.app",
  },
  {
    title: "Alzheimer's Detection",
    category: "ML / Healthcare",
    tools: "Python, scikit-learn, Pandas",
    preview: null,
    image: "/images/alzheimer-preview.svg",
    link: "https://github.com/Yash-180504/Alzheimer-Disease-Detection",
  },
  {
    title: "Resume Parser",
    category: "NLP / AI",
    tools: "Python, spaCy, NLP, Regex",
    preview: "https://resume-parser-roan-five.vercel.app",
    image: null,
    link: "https://resume-parser-roan-five.vercel.app",
  },
  {
    title: "Mom's Magic",
    category: "Full Stack",
    tools: "React, Node.js, Express, MongoDB",
    preview: "https://www.momsmagic.fun",
    image: null,
    link: "https://www.momsmagic.fun",
  },
  {
    title: "Careasify",
    category: "Service Platform",
    tools: "TypeScript, Next.js",
    preview: "https://careasify.com",
    image: null,
    link: "https://careasify.com",
  },
];

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth <= 768) return;

    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                preview={project.preview}
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
