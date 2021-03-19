import React from 'react';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

import styles from '../styles/components/ContactSection.module.css';

const ContactSection: React.FC = () => (
  <section className={styles.container} id="contact">
    <p>Entre em contato comigo!</p>
    <h1>heldoaugusto@gmail.com</h1>

    <div className={styles.socialMedia}>
      <a target="_blank" rel="noreferrer" href="https://github.com/heldoaugusto">
        <FiGithub />
      </a>

      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/heldoaugusto/">
        <FiLinkedin />
      </a>
    </div>
  </section>
);

export default ContactSection;
