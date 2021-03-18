import React from 'react';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

import styles from '../styles/components/ContactSection.module.css';

const ContactSection: React.FC = () => (
  <div className={styles.container}>
    <p>Entre em contato comigo!</p>
    <h1>heldoaugusto@gmail.com</h1>

    <section className={styles.socialMedia}>
      <FiGithub />
      <FiLinkedin />
    </section>
  </div>
);

export default ContactSection;
