import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./Home.css";
import "@google/model-viewer";
import "bootstrap/dist/css/bootstrap.min.css";

const skillData = {
  Frontend: ["html.png", "css-3.png", "javascript.png", "bootstrap.png"],
  Backend: ["php.png", "python.png", "mysql.png"],
  Server: ["docker.webp", "nginx.png", "apache.png", "debian.png", "ubuntu.png", "proxmox.png", "casaos.png"],
  Ethical_Hacking: [],
  Design: ["figma.png", "canva.png"],
  Other: ["github.png", "VSCode.png", "anaconda.png"],
};

const achievements = [
  {
    title: "Icode Global Finals 2024",
    date: "05 Oktober 2024",
    score: "69",
    organizer: "Icode Foundation",
    certificateUrl: "/Certificate/icode_event_certificate_2024_10_05_08_30_00.pdf"
  },
  {
    title: "Icode Asia Pacific National Finals 2024",
    date: "21 September 2024",
    score: "11",
    organizer: "Icode Foundation",
    certificateUrl: "/Certificate/icode_event_certificate_2024_09_21_14_00_00.pdf"
  },
  {
    title: "Icode Participant 2024",
    date: "",
    score: "Participation",
    organizer: "Icode Foundation",
    certificateUrl: "/Certificate/icode_participation_certificate_1970_01_01_05_30_00 (1).pdf"
  },
  {
    title: "DRCT 2024",
    date: "-",
    score: "Honorable Mention",
    organizer: "SIMCC",
    certificateUrl: "/Certificate/Student – Download student performance report – SIMCC Member Development Portal.pdf"
  },
  {
    title: "Piagam KSI-HP 2025 Bidang Informatika",
    date: "-",
    score: "Perak",
    organizer: "Berlian Hati Mulia",
    certificateUrl: "/Certificate/piag_Informatika - KSI-HUT PUSKANAS 2025.pdf"
  },
  {
    title: "Piagam KSI-HP 2025 Bidang Bahasa Inggris",
    date: "-",
    score: "Perak",
    organizer: "Berlian Hati Mulia",
    certificateUrl: "/Certificate/piag_Bahasa_Inggris - KSI-HUT PUSKANAS 2025.pdf"
  },
  {
    title: "Sertifikat KSI-HP 2025 Bidang Informatika",
    date: "-",
    score: "Partisipasi",
    organizer: "Berlian Hati Mulia",
    certificateUrl: "/Certificate/cert_Informatika - KSI-HUT PUSKANAS 2025.pdf"
  },
  {
    title: "Sertifikat KSI-HP 2025 Bidang Bahasa Inggris",
    date: "-",
    score: "Partisipasi",
    organizer: "Berlian Hati Mulia",
    certificateUrl: "/Certificate/cert_Bahasa_Inggris - KSI-HUT PUSKANAS 2025.pdf"
  },
  {
    title: "Hacker Rank Python Beginner Certification",
    date: "14 March 2025",
    score: "Beginner",
    organizer: "Hacker Rank",
    certificateUrl: "/Certificate/python_basic certificate.pdf"
  },
  {
    title: "Pelajar Penggerak Merah Putih Angkatan 2 Anggota",
    date: "31 Januari 2025",
    score: "Anggota",
    organizer: "Patriot Pelajar Mahasiswa",
    certificateUrl: "/Certificate/Pedro Christian Tampubolon - Sertifikat Anggota Pelajar Penggerak Angkatan 2.pdf"
  },
  {
    title: "Peluncuran 7 Kebiasaan Anak Indonesia Hebat",
    date: "27 Desember 2024",
    score: "Partisipasi",
    organizer: "Patriot Pelajar Mahasiswa",
    certificateUrl: "Certificate/Pedro Christian Tampubolon - Sertifikat.pdf"
  }
];

const projects = [
  {
    title: 'Sakumon (Python Arcade)',
    description: 'A simple monster catching game made using Python Arcade and Tiled.',
    status: 'Ended',
    link: '#'
  },
  {
    title: 'Ignatius WEB APP',
    description: 'A web app focusing on data statistics for Lingkungan Ignatius, Gereja Katolik Medan.',
    status: 'Working On',
    link: '#'
  },
  {
    title: 'OrderPHP',
    description: 'A food and drinks ordering website using PHP and MySQL.',
    status: 'Working On',
    link: '#'
  },
  {
    title: 'PosPHP',
    description: 'A POS and inventory management system using PHP and MySQL.',
    status: 'Working On',
    link: '#'
  }
];

const Home = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify captcha first.");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        "service_daa3f3o",     // Ganti dengan Service ID kamu
        "template_fo8jfej",    // Ganti dengan Template ID kamu
        formRef.current,
        "sqWZvpuMmQUZ28XO1"      // Ganti dengan Public Key kamu
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setCaptchaVerified(false);
          setSending(false);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          setSending(false);
        }
      );
  };

  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <div>
      <header>
        <Navbar />
        <div className="container">
          <div className="text">
            <h1>Pedro Christian Tampubolon</h1>
            <p>Student | Full Stack Developer</p>
            <button
              className="btn btn-light"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Me
            </button>
          </div>
          <div className="bot1">
            <model-viewer
              className="robot1"
              src="/Robot.glb"
              alt="3D Robot Mascot"
              camera-controls
              disable-zoom
              interaction-prompt="none"
            />
          </div>
        </div>
      </header>

      <section id="about">
        <div className="bot">
          <model-viewer
            className="robot2"
            src="/Robot.glb"
            alt="3D Robot Mascot"
            auto-rotate
            camera-controls
            disable-zoom
            interaction-prompt="none"
          />
        </div>
        <div className="text1">
          <h2>Who am I?</h2>
          <p>
            Hello! I’m Pedro Christian Tampubolon, a young student from Indonesia
            who is obsessed with technology and programming. I dream to help people
            with my code. I’m a full stack developer, learning frontend, backend,
            and also server management. I'm also interested in cybersecurity and ethical hacking.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-left">
          <h2>Skills</h2>
          <div className="skills-navbar">
            {Object.keys(skillData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skills-content">
            {skillData[activeCategory].length > 0 ? (
              skillData[activeCategory].map((skill) => (
                <div key={skill} className="skill-item" style={{borderRadius: "50%", backgroundColor: "white", padding: "10px", margin: "10px"}}>
                  <img src={skill} alt={skill} style={{ width: "50px", height: "50px" }} />
                </div>
              ))
            ) : (
              <p className="empty-skill">No skills added yet.</p>
            )}
          </div>
        </div>
      </section>

      <section id="achievements">
        <h2 className="section-title">Achievements</h2>
        <div className="achievement-container">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <h3>{item.title}</h3>
              <p><strong>Tanggal:</strong> {item.date}</p>
              <p><strong>Skor/Status:</strong> {item.score}</p>
              <p><strong>Penyelenggara:</strong> {item.organizer}</p>
              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate-btn"
                >
                  View Sertifikat
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="modern-project-cards">
          {projects.map((project, index) => (
            <div key={index} className="modern-project-card">
              <div className="card-header">
                <h3>{project.title}</h3>
                <span className={`badge ${project.status.toLowerCase().replace(/\s/g, '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="description">{project.description}</p>
              <div className="card-footer">
                <a href={project.link} className="view-btn" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="bot3">
          <model-viewer
            className="robot3"
            src="/Robot.glb"
            alt="3D Robot Mascot"
            auto-rotate
            camera-controls
            disable-zoom
            interaction-prompt="none"
          />
        </div>
        <div className="contact-container">
          <h1>Contact Me</h1>
          <p className="contact-subtitle">
            Feel free to reach out by filling the form below. Your message will be sent directly to me.
          </p>

          <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="from_name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="from_email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Type your message here..." rows="5" required></textarea>
            </div>

            <ReCAPTCHA
              sitekey="6LdnvkcrAAAAABVaJpaF0UbatENRjsSGnCro494X"
              onChange={() => setCaptchaVerified(true)}
              onExpired={() => setCaptchaVerified(false)}
            />

            <button type="submit" className="contact-button" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Pedro Christian Tampubolon | All rights reserved. &copy; {new Date().getFullYear()} Skydome</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
