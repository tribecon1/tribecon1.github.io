import Aurora from './components/AuroraHeader';
import AnimatedContent from './components/AnimatedContent';
import FlowingMenu from './components/FlowingMenu';
import './App.css';
import './IconBanner.css';

function App() {
  const content = [
    {
      link: "#projects",
      text: "Projects",
      image: "project-image.jpg",
      content: (
        <div className="projects-section">
          <h2>My Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>NewTripIdeas</h3>
              <ul>
                <li>Collaborated on a web application that leveraged AI to create travel plans based on the user's chosen location, interests, and budget</li>
                <li>Implemented a Next.js framework to allow for greater search engine optimization for the website using static site generation for blog pages</li>
              </ul>
            </div>
            <div className="project-item">
              <h3>DNC Emailer, DOT Verifier & Retriever</h3>
              <ul>
                <li>Developed web-scraping programs that utilize Selenium and Playwright to automate the email process for companies in the DNC registry</li>
                <li>Created adjacent process of retrieving data from the CHP database and verifying for quotability with Geico's interface</li>
              </ul>
            </div>
            <div className="project-item">
              <h3>Custom Dice Designer</h3>
              <ul>
                <li>Connected a custom Shopify Liquid frontend to AWS API Gateways and Lambda functions</li>
                <li>Created and stored authenticated sessions in DynamoDB</li>
                <li>Developed a static Typescript React site using Three.js library for 3D dice rendering and customization</li>
                <li>Implemented S3 and DynamoDB storage for saving designs</li>
                <li>Integrated with Shopify site for display</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      link: "#skills",
      text: "Skills",
      image: "skills-image.jpg",
      content: (
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="logos">
            <div className="logos-slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain-wordmark.svg" />
            </div>
            <div className="logos-slide">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain-wordmark.svg" />
            </div>
          </div>
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                <li>Python</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Databases & Data Analysis</h3>
              <ul>
                <li>SQL (Postgres)</li>
                <li>NoSQL (MongoDB)</li>
                <li>Graph Databases (Neo4j)</li>
                <li>Key/Value Stores (Redis)</li>
                <li>Data Analysis (NumPy, Pandas, Scikit-learn)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <ul>
                <li>AWS (Lambda, Cognito, DynamoDB)</li>
                <li>Docker</li>
                <li>Terraform</li>
                <li>Google Cloud Platform</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Django</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Software Engineering</h3>
              <ul>
                <li>Test-Driven Development</li>
                <li>Single-Responsibility Design</li>
                <li>Data Structures & Algorithms</li>
                <li>RESTful and SOAP API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      )
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
      <div className="menu-container">
        <FlowingMenu items={content} />
      </div>
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
