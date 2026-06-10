import type { Project } from '../data/projects';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.icon}>{project.icon}</span>
        <span className={styles.external}>↗</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tags.map((t) => (
          <li key={t} className={styles.tag}>{t}</li>
        ))}
      </ul>
    </a>
  );
}
