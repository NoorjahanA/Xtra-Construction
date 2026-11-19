import SectionTitle from '../components/SectionTitle';
import { projects } from '../data';

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <SectionTitle bigWord="Services" small="We are professional" title="Our latest projects" center />

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project fade" key={project.title}>
              <img src={'/images/project-' + (index + 1) + '.jpg'} alt={project.title} />
              <div className="project-hover">
                <h3>{project.title}</h3>
                <p>{project.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
