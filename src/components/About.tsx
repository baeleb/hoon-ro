import headshot from '../../images/headshot.jpg';
import headshotWebp from '../../images/headshot.webp';
import styles from './About.module.css';

const skills = [
  'Python', 'TypeScript', 'Shell / Bash', 'Go',
  'Kubernetes', 'Docker', 'CI/CD', 'REST APIs',
  'WAF / Edge Security', 'Redis / MemoryDB', 'SQL',
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
            containerized services at Best Buy — securing CDN and firewall infrastructure
            governing 100M+ daily API requests.
          </p>
          <p>
            I got my start through a formally sanctioned red team / blue team exercise
            as an intern — I researched offensive attack patterns against authentication
            infrastructure, identified gaps in existing defenses, then built the detection
            library that closed them. That library was productionized post-hire and now
            anchors a multi-provider bot-mitigation pipeline that reduced malicious login
            attempts by 53%, saving ~45M fraudulent API calls monthly.
          </p>
          <p>
            These days I build internal platforms that centralize operations across
            multiple providers, wire up AI agents to live infrastructure via MCP,
            and ship event-driven Slack tooling that turns real-time diagnostics
            into self-service workflows — all while defending against SQL injection,
            XSS, and DDoS patterns across the full OWASP threat landscape at 100M+
            request scale.
          </p>
          <p>Technologies I work with daily:</p>
          <ul className={styles.skillList}>
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.frame}>
            <div className={styles.placeholder}>
              <picture>
                <source srcSet={headshotWebp} type="image/webp" />
                <img src={headshot} alt="Caleb Ro" width={1000} height={666} loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
