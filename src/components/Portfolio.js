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
          {/* <img 
            src="https://drive.google.com/file/d/1pMBI7IQ1udGAEfcQptjXXqzEemqhwY9T/view?usp=sharing" 
            alt="Ajithraj M" 
            className="w-48 h-48 mx-auto mb-8 rounded-full object-cover shadow-2xl border-4 border-cyan-400"
          /> */}
          <img
            src="https://drive.google.com/uc?export=view&id=1pMBI7IQ1udGAEfcQptjXXqzEemqhwY9T"
            alt="Ajithraj M"
            className="w-48 h-48 rounded-full border-4 border-cyan-400"
          />
         
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ajithraj 
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Security Engineer & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate security engineer with 2+ years of experience in product security, 
            automation, and AI/ML integration. Specializing in SAST, vulnerability assessment, 
            and building secure, scalable solutions.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/AJITHRAJ18/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
            >
              <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajith-raj-b37a92287/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
          
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Featured Project</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 shadow-xl hover:border-cyan-400 transition-colors">
              <div className="flex items-center mb-6">
                <Database className="text-cyan-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold text-white">Natural Language to Database Query Converter</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Built an intelligent system that converts human language queries (e.g., "show me all employees in sales") 
                into SQL using LangChain. The system understands natural language context and generates accurate database queries, 
                making data access more intuitive for non-technical users.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">LangChain</span>
                <span className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm">AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing security engineering, automation, and innovative technology solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <a href="mailto:ajithrajepm2218@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                ajithrajepm2218@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
              <a href="tel:+916382146594" className="text-gray-300 hover:text-cyan-400 transition-colors">
                +91 6382146594
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Location</h3>
              <p className="text-gray-300">Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ajithraj-m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
            >
              <Github size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
              <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/ajithraj-m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
            >
              <Linkedin size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
              <ExternalLink size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Ajithraj M. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}