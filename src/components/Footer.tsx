import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a
            href="https://github.com/baeleb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/calebro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:caleb@hoon.ro" className={styles.link}>
            <EmailIcon size={16} />
            Email
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>&copy; {year} Caleb Ro</p>
    </footer>
  );
}
