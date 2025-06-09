import './ContentSections.css';

const ContentSections = () => {
  return (
    <div className="content-sections">
      <section id="projects" className="content-section">
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className="section-content">
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