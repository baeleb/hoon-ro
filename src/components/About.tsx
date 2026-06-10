import headshot from '../../images/headshot.jpg';
import styles from './About.module.css';

const skills = [
  'Python', 'TypeScript', 'Shell / Bash', 'Go',
  'Kubernetes', 'Docker', 'Akamai WAF', 'Redis / MemoryDB',
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
            experience securing enterprise-scale CDN and web application infrastructure
            at Best Buy. My core focus is WAF policy engineering, bot detection and
            mitigation, and DoS/DDoS defense across hundreds of millions of daily requests.
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
            multiple security providers, wire up AI agents to live infrastructure via MCP,
            and write event-driven tooling that turns Slack into a real-time security
            operations console.
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
