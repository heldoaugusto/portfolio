import React from 'react';

import styles from '../styles/pages/Home.module.css';

import Logo from '../../public/logo';

import AboutMeSection from '../components/AboutMeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Home:React.FC = () => (
  <>
    <div className={styles.loadingContainer}>
      <Logo />
    </div>

    <div className={styles.container}>
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </>
);

export default Home;
