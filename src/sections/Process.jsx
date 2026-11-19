import { processSteps } from '../data';
import '../styles/Process.css';

function Process() {
  return (
    <section className="process-section">
      {/* Left Column (White Background) */}
      <div className="process-left fade">
        <div className="process-header">
          <span className="process-watermark">HOW?</span>
          <p className="process-subtitle">PROCESS OF CONSTRUCTION</p>
          <h2 className="process-title">
            How it works<br />in construction?
          </h2>
          <p className="process-desc">
            Slogan creation for your construction company is<br className="desc-break" /> crucial for the overall branding.
          </p>
        </div>

        <div className="process-photo-wrap">
          <div className="process-yellow-accent" />
          <div className="process-photo">
            <img src="/images/process-workers.jpg" alt="Workers on construction site" />
          </div>
        </div>
      </div>

      {/* Right Column (Dark Navy Background) */}
      <div className="process-right">
        {processSteps.map((step, index) => (
          <div className="step fade" key={step.title}>
            <div className="step-number">0{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
