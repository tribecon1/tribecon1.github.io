import './ContentSections.css';
import { useState } from 'react';

type Project = {
  title: string;
  description: string[];
};

type Projects = {
  [key: string]: Project;
};

const ContentSections = () => {
  const [activeProject, setActiveProject] = useState<string>('dice');

  const projects: Projects = {
    dice: {
      title: 'Custom Dice Designer',
      description: [
        'Connected a custom Shopify Liquid frontend to AWS API Gateways and Lambda functions',
        'Created and stored authenticated sessions in DynamoDB',
        'Developed a static Typescript React site using Three.js library for 3D dice rendering and customization',
        'Implemented S3 and DynamoDB storage for saving designs',
        'Integrated with Shopify site for display'
      ]
    },
    dnc: {
      title: 'DNC Emailer, DOT Verifier & Retriever',
      description: [
        'Developed web-scraping programs that utilize Selenium and Playwright to automate the email process for companies in the DNC registry',
        'Created adjacent process of retrieving data from the CHP database and verifying for quotability with Geico\'s interface'
      ]
    },
    newtripideas: {
      title: 'NewTripIdeas',
      description: [
        'Collaborated on a web application that leveraged AI to create travel plans based on the user\'s chosen location, interests, and budget',
        'Implemented a Next.js framework to allow for greater search engine optimization for the website using static site generation for blog pages'
      ]
    }
  };

  return (
    <div className="content-sections">
      <section id="projects" className="content-section">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className="section-content">
          <div className="project-tabs">
            <div className="tab-buttons">
              {Object.entries(projects).map(([key, project]) => (
                <button
                  key={key}
                  className={`tab-button ${activeProject === key ? 'active' : ''}`}
                  onClick={() => setActiveProject(key)}
                >
                  {project.title}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <div className="project-item">
                <h3>{projects[activeProject].title}</h3>
                <ul>
                  {projects[activeProject].description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-header">
          <h2>Skills</h2>
        </div>
        <div className="section-content">
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
      </section>
    </div>
  );
};

export default ContentSections; 