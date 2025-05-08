import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section id="about" className="about-section">
                  <h2>About Me</h2>
                  <p>
                    Welcome to my portfolio! I'm a passionate developer who loves creating
                    innovative solutions to complex problems. I specialize in web development
                    and am always eager to learn new technologies.
                  </p>
                </section>
                
                <Projects />

                <section id="contact" className="contact-section">
                  <h2>Contact Me</h2>
                  <p>
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out to me through:
                  </p>
                  <div className="contact-links">
                    <a href="mailto:your.email@example.com">Email</a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </section>
              </>
            } />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
