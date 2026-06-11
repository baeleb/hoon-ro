import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import styles from './Nav.module.css';

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        close();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (menuOpen) {
      document.addEventListener('click', onClick);
      document.addEventListener('keydown', onKey);
    }
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen, close]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} ref={menuRef}>
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
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><a href="/#about" className={styles.mobileLink} onClick={close}>About</a></li>
          <li><a href="/#projects" className={styles.mobileLink} onClick={close}>Projects</a></li>
          <li><a href="/#contact" className={styles.mobileLink} onClick={close}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
