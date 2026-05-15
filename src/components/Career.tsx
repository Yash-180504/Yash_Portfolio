import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI & ML)</h4>
                <h5>C.V. Raman Global University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing Computer Science Engineering with specialisation in
              Artificial Intelligence and Machine Learning. Building a strong
              foundation in algorithms, data structures, and intelligent systems
              design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack & Web Development Journey</h4>
                <h5>Self-Directed Learning & Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Expanded into full-stack development and modern web technologies,
              building responsive applications and strengthening development
              skills through real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>Pinnacle Labs</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Applied and optimised NLP-based resume parsing solutions using
              Python and text processing techniques. Worked on real-world AI use
              cases, implementing data extraction pipelines. Improved efficiency
              of resume screening by automating data processing, reducing review
              time by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building AI-Powered Solutions</h4>
                <h5>Open Source & Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Creating intelligent applications spanning NLP, machine learning,
              and full-stack development. Focused on AI workforce orchestration,
              DevOps automation, and scalable cloud-native systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
