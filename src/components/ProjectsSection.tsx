import React from 'react';

import projects from '../../projects.json';

import styles from '../styles/components/ProjectsSection.module.css';

const ProjectsSection: React.FC = () => (
  <section className={styles.container}>

    <h1>Projetos</h1>

    <div className={styles.content}>
      {projects.map((project) => (
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <h2>{project.name}</h2>
          </div>

          <section className={styles.cardContent}>
            <img src={project.image} alt="Pequi Airlines" />
            <p>{project.description}</p>

            <div className={styles.cardTechnologies}>
              {project.technologies.map((technology) => (
                <h3>{technology}</h3>
              ))}
            </div>

            <div className={styles.cardButtons}>
              {project.repository && <button type="button">Repositório</button>}
              {project.prototype && <button type="button">Protótipo</button>}
              {project.aplication && <button type="button">Aplicação</button>}

            </div>
          </section>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
