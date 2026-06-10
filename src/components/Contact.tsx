import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.overline}>04. What&rsquo;s next?</p>
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.body}>
        I&rsquo;m currently open to roles where I can build internal platforms,
        API tooling, and event-driven systems at scale. Whether you have
        an opportunity or just want to talk shop, I&rsquo;d love to connect.
      </p>
      <a href="mailto:calebhro@gmail.com" className="btn btnPrimary btnLg">
        Say Hello
      </a>
    </section>
  );
}
