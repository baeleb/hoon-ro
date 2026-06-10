import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li><a href="https://github.com/baeleb" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a></li>
        <li><a href="https://linkedin.com/in/calebro" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a></li>
      </ul>
      <p className={styles.copyright}>&copy; {year} Caleb Ro</p>
    </footer>
  );
}
