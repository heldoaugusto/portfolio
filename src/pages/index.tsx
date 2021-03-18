import React from 'react';

import styles from '../styles/pages/Home.module.css';

import Navbar from '../components/Navbar';
import AboutMeSection from '../components/AboutMeSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Home:React.FC = () => (
  <>
    <Navbar />

    <div className={styles.container}>
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </>
);

export default Home;
