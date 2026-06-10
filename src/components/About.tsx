import headshot from '../../images/headshot.jpg';
import styles from './About.module.css';

const skills = [
  'Python', 'TypeScript', 'Shell / Bash', 'Go',
  'Kubernetes', 'Docker', 'CI/CD', 'REST APIs',
  'Redis / MemoryDB', 'SQL',
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className="sectionHeading">
        <span className="sectionNum">01.</span> About
      </h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            I&apos;m a software engineer based in Saint Paul, MN, with 4+ years of
            experience building internal API platforms, event-driven automation, and
            containerized services at Best Buy. My work sits at the intersection of
            distributed systems, security infrastructure, and AI tooling — governing
            100M+ daily API requests.
          </p>
          <p>
            I got my start through a formally sanctioned red team / blue team exercise
            as an intern — I built an offensive credential-stuffing bot, bypassed existing
            detection methods, then flipped sides and built the fingerprinting library
            that defeated it. That library was productionized post-hire and now anchors
            a multi-provider bot-mitigation pipeline that reduced malicious login attempts
            by 53%, saving ~45M fraudulent API calls monthly.
          </p>
          <p>
            These days I build internal platforms that centralize operations across
            multiple providers, wire up AI agents to live infrastructure via MCP,
            and ship event-driven Slack tooling that turns real-time diagnostics
            into self-service workflows.
          </p>
          <p>Technologies I work with daily:</p>
          <ul className={styles.skillList}>
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.frame}>
            <div className={styles.placeholder}>
              <img src={headshot} alt="Caleb Ro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
