import React from 'react';

import { Link } from 'react-scroll';

import styles from '../styles/components/AboutMeSection.module.css';

const AboutMeSection: React.FC = () => (
  <section className={styles.container} id="aboutme">
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

      <Link to="projects" smooth offset={-56}>
        Conheça meus projetos
      </Link>

    </div>

  </section>
);

export default AboutMeSection;
