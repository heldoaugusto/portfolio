import React from 'react';

import projects from '../../projects.json';

import styles from '../styles/components/ProjectsSection.module.css';

const ProjectsSection: React.FC = () => (
  <section className={styles.container} id="projects">

    <h1>Projetos</h1>

    <div className={styles.content}>
      {projects.map((project) => (
        <div className={styles.card} key={project.id}>
          <div className={styles.cardTitle}>
            <h2>{project.name}</h2>
          </div>

          <section className={styles.cardContent}>
            <img src={project.image} alt="Pequi Airlines" />
            <p>{project.description}</p>

            <div className={styles.cardTechnologies}>
              {project.technologies.map((technology) => (
                <h3 key={technology.id}>{technology.name}</h3>
              ))}
            </div>

            <div className={styles.cardButtons}>
              {project.repository
                && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositório
                </a>
                )}

              {project.prototype
                && (
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noreferrer"
                >
                  Protótipo
                </a>
                )}

              {project.application
                && (
                <a
                  href={project.application}
                  target="_blank"
                  rel="noreferrer"
                >
                  Aplicação
                </a>
                )}
            </div>
          </section>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
