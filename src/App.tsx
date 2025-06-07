import Aurora from './components/AuroraHeader';
import AnimatedContent from './components/AnimatedContent';
import './App.css';

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
            <h1 className="name">My name is Bentley Bigelow</h1>
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
    </div>
  );
}

export default App;
