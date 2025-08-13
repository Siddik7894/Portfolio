// src/Home.js
import React from 'react';

function Home() {
  // Placeholder function for form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const sendWhatsApp = () => {
    window.open("https://wa.me/916001027894", "_blank");
  };

  return (
    <>
      <div id="particles-js">
        <section className="hero">
          <div className="hero-left">
            <p className="tagline">WE DESIGN & BUILD BRANDS</p>
            <h1>
              Hi, I am <span>Abubakkar Siddik</span> <br />
              I build responsive & modern websites.
            </h1>
            <div className="buttons">
              <a href=" " className="btn primary">Hire me</a>
              <a href="./assets/Resume(Abu).docx" className="btn outline" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="bg-skew"></div>
            <img src="./assets/abu.png" alt="Abubakkar" />
          </div>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <img src="./assets/abu2.jpg" alt="Profile" />
            </div>
            <div className="about-content">
              <h3 className="section-subtitle">MY INTRODUCTION</h3>
              <h4>About Me</h4>
              <p>
                I'm Abubakkar Siddik, a frontend developer from Assam. I enjoy building responsive and user-friendly websites.
                Skilled in HTML, CSS, and JavaScript with hands-on project experience. Created a fashion e-commerce site and personal portfolio.
                I'm passionate about clean UI and mobile-first design. Looking to grow in a tech-driven team and learn more every day.
              </p>
              <p><em>“Design is intelligence made visible. Code brings it to life.”</em></p>

              <div className="about-details">
                <p><strong>Name:</strong> Abubakkar Siddik</p>
                <p><strong>Date of birth:</strong> February 01, 2004</p>
                <p><strong>Address:</strong> Kokrajhar, Assam , India</p>
                <p><strong>Zip code:</strong> 783360</p>
                <p><strong>Email:</strong> abubakkar27894@gmail.com</p>
                <p><strong>Phone:</strong> +91-6001027894</p>
              </div>
              <div className="interests">
                <span><i className="fas fa-music"></i> Music</span>
                <span><i className="fas fa-plane"></i> Travel</span>
                <span><i className="fas fa-film"></i> Movie</span>
                <span><i className="fas fa-futbol"></i> Sports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-slider">
          <div className="skills-track">
            {[
              { name: 'HTML', level: '95%', img: './assets/html.png' },
              { name: 'JavaScript', level: '80%', img: './assets/javascript.png' },
              { name: 'Bootstrap', level: '90%', img: './assets/bootstrap.png' },
              { name: 'React', level: '78%', img: './assets/react.png' },
              { name: 'Figma', level: '60%', img: './assets/figma.png' },
              { name: 'Java', level: '75%', img: './assets/java.png' },
              { name: 'Node JS', level: '70%', img: './assets/node js.png' },
              { name: 'GitHub', level: '70%', img: './assets/github.png' },
            ].concat([
              { name: 'HTML', level: '95%', img: './assets/html.png' },
              { name: 'CSS', level: '92%', img: './assets/css.png' },
              { name: 'JavaScript', level: '80%', img: './assets/javascript.png' },
              { name: 'Bootstrap', level: '90%', img: './assets/bootstrap.png' },
              { name: 'React', level: '78%', img: './assets/react.png' },
              { name: 'Figma', level: '60%', img: './assets/figma.png' },
              { name: 'Java', level: '75%', img: './assets/java.png' },
              { name: 'Node JS', level: '70%', img: './assets/node js.png' },
              { name: 'GitHub', level: '70%', img: './assets/github.png' },
            ]).map((skill, i) => (
              <div className="skill-card" key={i}>
                <img src={skill.img} className="skill-icon" alt={skill.name} />
                <h4>{skill.name}</h4>
                <div className="level-label">{skill.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: 'Fashion Store',
              tech: 'HTML, CSS, Bootstrap',
              link: 'https://ramesh-63.github.io/TREND-AURA/',
              img: './assets/trendaura.png',
            },
            {
              title: 'Learning Institute',
              tech: 'HTML, CSS, JS',
              link: 'https://ramesh-63.github.io/Neo-Learning/',
              img: './assets/neolearn.png',
            },
            {
              title: 'Portfolio Website',
              tech: 'HTML, CSS, JS',
              link: 'https://ramesh-63.github.io/RAMESH-PORTFOLIO/',
              img: './assets/abu3.png',
            },
            {
              title: 'Neo Learning Website',
              tech: 'HTML, CSS, JS',
              link: 'https://ramesh-63.github.io/Neo-Learning/',
              img: './assets/neo learning.png',
            },
          ].map((project, i) => (
            <div className="project-card" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="button-group">
              <button type="button" className="btn primary" onClick={sendWhatsApp}>Send Message</button>
              <button type="submit" className="btn outline">Send Email</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <h3>Abubakkar Siddik</h3>
          <p>Crafting frontend experiences with code & creativity ✨</p>
          <div className="social-icons">
            <a href="https://github.com/ramesh-63" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ramesh-kannan-81992835a" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ramesh.webdev/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="copyright">© 2025 Abubakkar Siddik. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
