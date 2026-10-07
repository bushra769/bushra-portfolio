import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Bushra Saeed</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
  <div className="hero-content">

    <span className="hero-tag">WELCOME TO MY PORTFOLIO</span>

    <h1>
      Hi, I'm <span>Bushra Saeed</span>
    </h1>

    <h2>Aspiring Software Developer | Web Development</h2>

    <p>
      I create modern, responsive, and user-friendly web applications
      with a focus on clean design, functionality, and great user
      experiences.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="btn primary">
        View My Work
      </a>

      <a href="#contact" className="btn secondary">
        Contact Me
      </a>
    </div>

  </div>

  <div className="hero-card">
    <div className="hero-avatar">PP</div>

    <h3>Bushra Saeed</h3>

    <p>Aspiring Software Developer</p>

    <span>Web Development • Frontend & Full-Stack</span>
  </div>
</section>

      {/* About */}
      <section id="about" className="about section">
  <div className="section-heading">
    <span>ABOUT ME</span>
    <h2>Who I Am</h2>
  </div>

  <div className="about-content">
    <div className="about-text">
      <h3>Aspiring Software Developer</h3>

      <p>
        I am an aspiring software developer with a strong interest in
        building modern, responsive, and user-friendly web applications.
        I enjoy turning ideas into functional digital experiences and
        continuously improving my skills through hands-on projects.
      </p>

      <p>
        My focus is on web development, frontend and full-stack
        development, with experience working with JavaScript, React,
        Angular, Node.js, and Express.js.
      </p>

      <p>
        I am always eager to learn new technologies, solve real-world
        problems, and contribute to meaningful projects.
      </p>
    </div>
  </div>
</section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">MY SKILLS</p>
        <h2 className="section-title">Technologies I work with</h2>

        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Angular</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">Vercel</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects section">
  <div className="section-heading">
    <span>MY WORK</span>
    <h2>Featured Projects</h2>
  </div>

  <div className="projects-grid">

    <div className="project-card">
      <h3>ConnectHub</h3>
      <p>
        A real-time communication and collaboration platform with
        chat, video calling, file sharing, and interactive features.
      </p>
      <span>React • Node.js • Socket.io • WebRTC</span>
    </div>

    <div className="project-card">
      <h3>SaaSify Dashboard</h3>
      <p>
        A modern SaaS dashboard interface featuring analytics,
        projects, team management, tasks, and responsive navigation.
      </p>
      <span>Angular • TypeScript • HTML • CSS</span>
    </div>

    <div className="project-card">
      <h3>SaaS Pricing Section</h3>
      <p>
        A responsive and professional pricing section designed for
        SaaS products with clear plans, features, and call-to-action.
      </p>
      <span>HTML • CSS • JavaScript</span>
    </div>

    <div className="project-card">
      <h3>Coffee Shop Website</h3>
      <p>
        A modern coffee shop landing page designed with an attractive
        hero section and responsive layout.
      </p>
      <span>HTML • CSS • JavaScript</span>
    </div>

    <div className="project-card">
      <h3>ShopEase E-commerce</h3>
      <p>
        An e-commerce application featuring products, shopping cart,
        order management, and a responsive user interface.
      </p>
      <span>React • Node.js • Express.js • SQLite</span>
    </div>

    <div className="project-card">
      <h3>Social Media Platform</h3>
      <p>
        A social media web application with user profiles,
        following functionality, and interactive features.
      </p>
      <span>React • Node.js • Express.js • SQLite</span>
    </div>

    <div className="project-card">
      <h3>Project Management Tool</h3>
      <p>
        A Trello-style project management application for organizing
        projects, tasks, and workflow in a clean interface.
      </p>
      <span>React • Vite • MongoDB</span>
    </div>

    <div className="project-card">
      <h3>GitHub Search App</h3>
      <p>
        A web application that allows users to search GitHub profiles
        and explore developer information through a simple interface.
      </p>
      <span>JavaScript • API • HTML • CSS</span>
    </div>

    <div className="project-card">
      <h3>Pokémon App</h3>
      <p>
        An interactive Pokémon application displaying Pokémon data
        through API-based search and a responsive interface.
      </p>
      <span>JavaScript • API • HTML • CSS</span>
    </div>

    <div className="project-card">
      <h3>FAQ & Product Card</h3>
      <p>
        Responsive UI components including an FAQ section and
        product card layouts with clean modern styling.
      </p>
      <span>HTML • CSS • JavaScript</span>
    </div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">CONTACT</p>
        <h2>Let's build something together.</h2>
        <p>
          I'm open to learning opportunities, internships and exciting
          development projects.
        </p>

        <a href="mailto:your-email@example.com" className="primary-btn">
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Bushra Saeed. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;