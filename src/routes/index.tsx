import Hero from '../components/Hero';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import projects from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const projectRef = useScrollReveal<HTMLDivElement>();
  const contactRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <Hero />
      <About />
      <section id="projects">
        <div ref={projectRef} className="reveal" style={{ maxWidth: 'var(--max-width)', margin: '0 auto 160px', padding: '0 24px' }}>
          <h2 className="sectionHeading">
            <span className="sectionNum">02.</span> Projects
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>
      <div ref={contactRef} className="reveal">
        <Contact />
      </div>
    </>
  );
}
