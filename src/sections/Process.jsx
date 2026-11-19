import SectionTitle from '../components/SectionTitle';
import { processSteps } from '../data';

function Process() {
  return (
    <section className="process">
      <div className="process-left fade">
        <SectionTitle bigWord="How?" small="Process of construction" title="How it works in construction?" />
        <p>Slogan creation for your construction company is crucial for the overall branding.</p>
        <div className="process-photo">
          <img src="/images/process.jpg" alt="Worker cutting metal on a building site" />
        </div>
      </div>

      <div className="process-right">
        {processSteps.map((step, index) => (
          <div className="step fade" key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <div>
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
