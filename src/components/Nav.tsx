import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import styles from './Nav.module.css';

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>&lt;CHR /&gt;</Link>
        <ul className={styles.links}>
          <li><a href="/#about" className={styles.link}>About</a></li>
          <li><a href="/#projects" className={styles.link}>Projects</a></li>
          <li><a href="/#contact" className={styles.link}>Contact</a></li>
        </ul>
        <button className={styles.toggle} onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19'}
        </button>
      </div>
    </nav>
  );
}
