import React from 'react';

import styles from '../styles/components/AboutMeSection.module.css';

const AboutMeSection: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.aboutMePhoto}>
      <img src="/heldoaugusto.png" alt="Foto Heldo Augusto" />
    </div>

    <div className={styles.aboutMeDescription}>
      <img src="/logoname.svg" alt="heldoaugusto" />
      <p>
        Olá, eu sou o Heldo! Moro em Goiânia e sou
        desenvolvedor front-end React e designer de
        interfaces com mindset voltado à experiência
        do usuário.
      </p>
      <button type="button">Conheça meus projetos</button>
    </div>

  </section>
);

export default AboutMeSection;
