import Aurora from './components/AuroraHeader';
import AnimatedContent from './components/AnimatedContent';
import ContentSections from './components/ContentSections';
import { useState, useEffect } from 'react';
import './App.css';
import './IconBanner.css';

function App() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Show scroll indicator after initial animation (1.2s + 0.3s delay)
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isHiding) {
        setIsHiding(true);
        setTimeout(() => {
          setShowScrollIndicator(false);
          setIsHiding(false);
        }, 500);
      } else if (window.scrollY === 0 && !showScrollIndicator) {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showScrollIndicator, isHiding]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerOffset = 100;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 2000; // 2 seconds
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth acceleration and deceleration
        const easeInOutCubic = (progress: number): number => {
          return progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        };

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

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
              I am a studying fullstack software developer! Scroll below to take a look at my personal projects, skills, and contact information!
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
      <div className={`scroll-indicator ${showScrollIndicator ? 'visible' : ''} ${isHiding ? 'hiding' : ''}`}>
        <p className="scroll-text">Check out my projects and skills!</p>
        <div className="arrows" onClick={scrollToProjects}>
          <i className="fas fa-chevron-down"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <ContentSections />
      <div className="bottom-sections">
        <div className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I was born and raised in Southern California, never too far from the beach, which engendered a love for volleyball, longboarding, and running. I have also been able to travel the world, serving as a volunteer missionary for my church in Ukraine, Germany, Switzerland, and Austria, helping me develop my skills to speak both Ukrainian and German.</p>
            </div>
            <div className="about-images">
              <img src="/bigelow -137.JPG" alt="Wedding Photo" className="about-image wedding" />
              <img src="/hiking.png" alt="Hiking Photo" className="about-image hiking" />
            </div>
            <div className="about-text">
              <p>I am happily married as of October 2024, and my wife and I love spending time watching every new movie or show, going on hikes, and being with friends and family!</p>
            </div>
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
