import Aurora from './components/AuroraHeader';
import AnimatedContent from './components/AnimatedContent';
import FlowingMenu from './components/FlowingMenu';
import './App.css';

function App() {
  const demoItems = [
    {
      link: "#projects",
      text: "Projects",
      image: "project-image.jpg",
      content: (
        <div>
          <h2>My Projects</h2>
          <p>Project details and descriptions go here...</p>
        </div>
      )
    },
    {
      link: "#skills",
      text: "Skills",
      image: "skills-image.jpg",
      content: (
        <div>
          <h2>Technical Skills</h2>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
      )
    },
    {
      link: '#',
      text: 'Education and Work',
      image: 'https://picsum.photos/600/400?random=3'
    },
    {
      link: '#',
      text: 'text',
      image: 'https://picsum.photos/600/400?random=4'
    }
  ];
  
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
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
}

export default App;
