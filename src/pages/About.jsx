import { useState } from 'react';
import { FaCheck, FaPlay } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import CtaBanner from '../components/CtaBanner';
import Testimonials from '../components/Testimonials';
import VideoPopup from '../components/VideoPopup';
import { aboutParagraph, aboutChecksLong, aboutTiles, stats, skills, VIDEO_ID } from '../data';
import '../styles/About.css';

function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <PageTitle title="About" />

      {/* Intro text */}
      <section className="about-intro">
        <div className="container intro-grid">
          <div className="fade">
            <SectionTitle bigWord="About" small="About our company" title="It’s all about construction company" />
          </div>
          <div className="fade">
            <p>{aboutParagraph}</p>
            <ul className="check-list two-columns dark-checks">
              {aboutChecksLong.map((item) => (
                <li key={item}><FaCheck /> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Three yellow photo tiles. On hover the yellow fades and the photo shows */}
        <div className="container tiles">
          {aboutTiles.map((tile) => (
            <div className="tile fade" key={tile.title}>
              <img src={tile.image} alt={tile.title} />
              <span className="tile-name">{tile.title}</span>
              <span className="tile-more">More details</span>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <section className="numbers">
        <div className="container">
          <SectionTitle bigWord="Numbers" small="We are professional" title="Why you should choose us?" center light />
          <div className="number-cards">
            {stats.map((item) => (
              <div className="number-card fade" key={item.label}>
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo with play button + skill bars */}
      <section className="skills-section">
        <div className="skills-photo fade">
          <img src="/images/process.jpg" alt="Worker cutting metal" />
          <button className="photo-play" onClick={() => setVideoOpen(true)} aria-label="Play video"><FaPlay /></button>
        </div>
        <div className="skills-content fade">
          <p>Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored.</p>
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-bar" style={{ '--percent': skill.percent + '%' }}>
                <span>{skill.name}</span>
                <b>{skill.percent}%</b>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner dark />
      <Testimonials />
      {videoOpen && <VideoPopup videoId={VIDEO_ID} onClose={() => setVideoOpen(false)} />}
    </>
  );
}

export default About;
