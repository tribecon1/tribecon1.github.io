import Aurora from './components/AuroraHeader';
import AnimatedContent from './components/AnimatedContent';
import ContentSections from './components/ContentSections';
import './App.css';
import './IconBanner.css';

function App() {
  return (
    <div className="app-container">
      <Aurora
        colorStops={["#00BFFF", "#FFA500", "#87CEEB"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.4}
      />
      <div className="content-container">
        <div className="text-section">
          <AnimatedContent
            distance={150}
            direction="vertical"
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <h1 className="greeting">Hey!</h1>
            <h1 className="name">I'm Bentley Bigelow</h1>
            <p className="description">
              I am a studying fullstack software developer! Scroll below to take a look at my personal projects, skills, and educational and professional experience!
            </p>
          </AnimatedContent>
        </div>
        <div className="image-section">
          <AnimatedContent
            distance={150}
            direction="vertical"
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.5}
          >
            <img src="/personal_pic.png" alt="Personal" className="personal-image" />
          </AnimatedContent>
        </div>
      </div>
      <ContentSections />
      <div className="bottom-sections">
        <div className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>This section will be filled in later with personal information and background.</p>
          </div>
        </div>
        <div className="contact-section">
          <h2>Let's Get in Touch!</h2>
          <div className="contact-content">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+19517234823">(951) 723-4823</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:bentleylbigelow@gmail.com">bentleylbigelow@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/tribecon1" target="_blank" rel="noopener noreferrer">github.com/tribecon1</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/bentleybigelow" target="_blank" rel="noopener noreferrer">linkedin.com/in/bentleybigelow</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
