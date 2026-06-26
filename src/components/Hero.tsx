import type { CSSProperties } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import styles from './Hero.module.css';

type Token = { c?: string; t: string };

const code: Token[][] = [
  [{ c: 'kw', t: 'const' }, { t: ' ' }, { c: 'fn', t: 'caleb' }, { t: ' = {' }],
  [{ t: '  ' }, { c: 'prop', t: 'role' }, { t: ': ' }, { c: 'str', t: "'Software Engineer'" }, { t: ',' }],
  [
    { t: '  ' }, { c: 'prop', t: 'stack' }, { t: ': [' },
    { c: 'str', t: "'Python'" }, { t: ', ' }, { c: 'str', t: "'TS'" }, { t: ', ' },
    { c: 'str', t: "'Bash'" }, { t: ', ' }, { c: 'str', t: "'Go'" }, { t: '],' },
  ],
  [
    { t: '  ' }, { c: 'prop', t: 'focus' }, { t: ': [' },
    { c: 'str', t: "'Platforms'" }, { t: ', ' }, { c: 'str', t: "'Security'" }, { t: ', ' },
    { c: 'str', t: "'AI / MCP'" }, { t: '],' },
  ],
  [{ t: '  ' }, { c: 'prop', t: 'reqs' }, { t: ': ' }, { c: 'str', t: "'100M+ / day'" }, { t: ',' }],
  [{ t: '  ' }, { c: 'prop', t: 'uptime' }, { t: ': ' }, { c: 'str', t: "'99.9%'" }, { t: ',' }],
  [{ t: '};' }],
];

type StatDef = { value: number; decimals?: number; suffix: string; label: string };

const stats: StatDef[] = [
  { value: 100, suffix: 'M+', label: 'API requests / day' },
  { value: 99.9, decimals: 1, suffix: '%', label: 'platform uptime' },
  { value: 4, suffix: '+', label: 'years building' },
];

function Stat({ value, decimals = 0, suffix, label, delay }: StatDef & { delay: number }) {
  const { ref, display } = useCountUp<HTMLSpanElement>(value, { decimals });
  return (
    <div className={`${styles.stat} ${styles.revealItem}`} style={{ '--i': delay } as CSSProperties}>
      <span className={styles.statNum} ref={ref}>
        {display}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={`${styles.greeting} ${styles.revealItem}`} style={{ '--i': 0 } as CSSProperties}>
            Hi, my name is
          </p>
          <h1 className={`${styles.name} ${styles.revealItem}`} style={{ '--i': 1 } as CSSProperties}>
            Caleb Ro
          </h1>
          <h2 className={`${styles.tagline} ${styles.revealItem}`} style={{ '--i': 2 } as CSSProperties}>
            I build platforms that scale.
          </h2>
          <p className={`${styles.blurb} ${styles.revealItem}`} style={{ '--i': 3 } as CSSProperties}>
            Software engineer with 4+ years building internal API platforms,
            event-driven automation, and AI-integrated tooling at enterprise
            scale — governing 100M+ daily requests.
          </p>
          <div className={`${styles.cta} ${styles.revealItem}`} style={{ '--i': 4 } as CSSProperties}>
            <a href="#projects" className="btn btnPrimary">See my work</a>
            <a href="#contact" className="btn btnOutline">Get in touch</a>
          </div>
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <Stat key={s.label} {...s} delay={5 + i} />
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.window} aria-hidden="true">
            <div className={styles.titlebar}>
              <span className={styles.dots}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.filename}>caleb.ts</span>
            </div>
            <div className={styles.code}>
              {code.map((line, i) => (
                <div className={styles.line} key={i}>
                  <span className={styles.ln}>{i + 1}</span>
                  <span className={styles.lc}>
                    {line.map((tok, j) => (
                      <span key={j} className={tok.c ? styles[tok.c] : undefined}>
                        {tok.t}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
