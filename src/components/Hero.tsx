import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Caleb Ro</h1>
        <h2 className={styles.tagline}>I secure the edge.</h2>
        <p className={styles.blurb}>
          Software engineer specializing in CDN security, WAF policy engineering,
          and bot detection — governing 100M+ daily API requests and defending
          infrastructure against the full OWASP threat landscape.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className="btn btnPrimary">See my work</a>
          <a href="#contact" className="btn btnOutline">Get in touch</a>
        </div>
      </div>
      <div className={styles.visual}>
        <pre className={styles.codeSnippet} aria-hidden="true">
          <code>
            <span className={styles.kw}>const</span>{' '}
            <span className={styles.fn}>caleb</span> = {'{\n'}{'  '}
            <span className={styles.prop}>role</span>:{' '}
            <span className={styles.str}>'Edge Security'</span>,{'\n'}{'  '}
            <span className={styles.prop}>stack</span>:{' '}
            [<span className={styles.str}>'Python'</span>,{' '}
            <span className={styles.str}>'TS'</span>,{' '}
            <span className={styles.str}>'Bash'</span>,{' '}
            <span className={styles.str}>'Go'</span>],{'\n'}{'  '}
            <span className={styles.prop}>focus</span>:{' '}
            [<span className={styles.str}>'WAF'</span>,{' '}
            <span className={styles.str}>'Bot Mitigation'</span>,{' '}
            <span className={styles.str}>'DDoS'</span>],{'\n'}{'  '}
            <span className={styles.prop}>reqs</span>:{' '}
            <span className={styles.str}>'100M+ / day'</span>,{'\n'}{'  '}
            <span className={styles.prop}>uptime</span>:{' '}
            <span className={styles.str}>'99.9%'</span>,{'\n'}
            {'};'}
          </code>
        </pre>
      </div>
    </section>
  );
}
