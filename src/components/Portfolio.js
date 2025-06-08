// src/components/Portfolio.js
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Shield, Cloud, Database, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile ? 'block w-full text-left px-4 py-2' : 'px-4 py-2'
      } text-gray-300 hover:text-cyan-400 transition-colors ${
        activeSection === href ? 'text-cyan-400' : ''
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-cyan-400">Ajithraj M</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            {/* Mobile Navigation Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <NavLink href="home" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="experience" mobile>Experience</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo - Replace this with your actual photo */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
            AM
          </div>
          {/* Uncomment and use this when you add your photo:
          <img 
            src="/images/profile.jpg" 
            alt="Ajithraj M" 
            className="w-48 h-48 mx-auto mb-8 rounded-full object-cover shadow-2xl border-4 border-cyan-400"
          />
          */}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ajithraj
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Security Engineer & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate engineer with 2+ years of experience in product security, Software development,
            automation, and AI/ML integration. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all"
            >
              View My Work
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Security Engineer & Problem Solver</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a curious and dedicated security engineer with a passion for automating security processes 
                and developing innovative solutions. My journey began with Electrical and Electronics Engineering 
                at Bannari Amman Institute of Technology, but I found my calling in cybersecurity and software development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Temenos, I've built automated risk analysis solutions, developed security dashboards, 
                and conducted comprehensive security assessments. I'm particularly excited about integrating 
                AI/ML with security practices to create more intelligent and proactive security solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not securing applications or building automation tools, I enjoy exploring new 
                technologies and contributing to open-source projects.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Education</h4>
                <div>
                  <h5 className="font-semibold text-white">Bachelor of Engineering</h5>
                  <p className="text-gray-400">Electrical and Electronics Engineering</p>
                  <p className="text-gray-400">Bannari Amman Institute of Technology</p>
                  <p className="text-gray-400">2019 - 2023</p>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="text-xl font-semibold mb-4 text-cyan-400">Contact Info</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-cyan-400" />
                    <span className="text-gray-300">+91 6382146594</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-cyan-400" />
                    <span className="text-gray-300">ajithrajepm2218@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-cyan-400" />
                    <span className="text-gray-300">Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Associate Product Engineer – Product Security</h3>
                  <p className="text-cyan-400 font-semibold">Temenos | Chennai</p>
                </div>
                <div className="text-gray-400 mt-2 sm:mt-0">
                  May 2023 - Present
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Built an automated risk analysis solution using LangGraph to detect vulnerable third-party 
                    library usage by tracing CVE-reported methods/classes directly within the product codebase.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Developed and implemented an automated end-to-end process using Python to deploy artifacts, 
                    scan images with JFrog, and push scan results to a centralized security dashboard. This improved 
                    efficiency by reducing 90% manual effort and ensured timely security assessments for 300+ components.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Designed and built a third-party library management portal to provide developers with approved 
                    and restricted libraries, integrating it with the CI/CD pipeline to automatically fail builds 
                    that used rejected libraries.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Conducted monthly SAST audits and web application penetration tests, identifying and reporting 
                    medium and high-severity vulnerabilities, contributing to improved application security posture.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Performed static code analysis using Fortify and conducted manual Open-Source Library (OSL) 
                    scans to ensure compliance and identify potential risks associated with third-party dependencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Development</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Python</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Java</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Django</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">REST API</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">LangGraph</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-center mb-4">
                <Shield className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Security</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">SAST</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">DAST</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Pen Testing</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">OWASP Top 10</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Burp Suite</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Fortify</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-center mb-4">
                <Cloud className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Azure</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Docker</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Jenkins</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Git</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">JFrog</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-center mb-4">
                <Database className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Data & AI</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">PostgreSQL</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">NumPy</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">Pandas</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">LangChain</span>
                <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm mr-2 mb-2">AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section id="projects" className="py-20 px-4 bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Featured Project</h2>
                <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl hover:border-cyan-400 transition-colors">
                    <div className="flex items-center mb-6">
                    <Database className="text-cyan-400 mr-4" size={32} />
                    <h3 className="text-2xl font-bold text-white">
                        Natural Language to Database Query Converter
                    </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                    Built an intelligent system that converts human language queries (e.g., "show me all employees in sales") 
                    into SQL using LangChain. The system supports dynamic query generation and integrates with PostgreSQL, 
                    allowing non-technical users to interact with databases using plain English. Input sanitization and query validation 
                    are implemented to prevent SQL injection attacks.
                    </p>
                    <div className="flex flex-wrap gap-3">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">LangChain</span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
  )
}
