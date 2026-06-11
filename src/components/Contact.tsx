import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.overline}>03. What&rsquo;s next?</p>
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.body}>
        Always happy to connect with fellow engineers, open-source
        collaborators, or anyone building at the intersection of platforms
        and infrastructure. Whether you want to talk shop or have something
        in mind, feel free to reach out.
      </p>
      <a href="mailto:caleb@hoon.ro" className="btn btnPrimary btnLg">
        Say Hello
      </a>
    </section>
  );
}
