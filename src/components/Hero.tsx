import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Caleb Ro</h1>
        <h2 className={styles.tagline}>I build platforms that scale.</h2>
        <p className={styles.blurb}>
          Software engineer with 4+ years building internal API platforms,
          event-driven automation, and AI-integrated tooling at enterprise
          scale — governing 100M+ daily requests.
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
            <span className={styles.str}>'Software Engineer'</span>,{'\n'}{'  '}
            <span className={styles.prop}>stack</span>:{' '}
            [<span className={styles.str}>'Python'</span>,{' '}
            <span className={styles.str}>'TS'</span>,{' '}
            <span className={styles.str}>'Bash'</span>,{' '}
            <span className={styles.str}>'Go'</span>],{'\n'}{'  '}
            <span className={styles.prop}>focus</span>:{' '}
            [<span className={styles.str}>'Platforms'</span>,{' '}
            <span className={styles.str}>'Security Eng'</span>,{' '}
            <span className={styles.str}>'AI / MCP'</span>],{'\n'}{'  '}
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
