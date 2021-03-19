import React, { useCallback, useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

import styles from '../styles/components/Navbar.module.css';

import Logo from '../../public/logo';

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenCloseMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.container}>
        <section className={styles.bar}>
          <Logo />

          <div className={styles.menuIcon}>
            {isMenuOpen
              ? <FiX onClick={handleOpenCloseMenu} />
              : <FiMenu onClick={handleOpenCloseMenu} />}
          </div>

          <div className={styles.menuInline}>
            <ul>
              <Link
                to="aboutme"
                offset={-56}
                smooth
              >
                <li key="aboutme">Sobre mim</li>
              </Link>

              <Link
                to="projects"
                smooth
                offset={-56}
              >
                <li key="projects">Projetos</li>
              </Link>

              <Link
                to="contact"
                smooth
              >
                <li key="contact">Contato</li>
              </Link>
            </ul>
          </div>
        </section>
      </header>

      {isMenuOpen && (
        <section className={styles.menu}>
          <ul>
            <Link
              to="aboutme"
              onClick={handleOpenCloseMenu}
              offset={-56}
              smooth
            >
              <li key="aboutme">Sobre mim</li>
            </Link>

            <Link
              to="projects"
              onClick={handleOpenCloseMenu}
              offset={-56}
              smooth
            >
              <li key="projects">Projetos</li>
            </Link>

            <Link
              to="contact"
              onClick={handleOpenCloseMenu}
              smooth
            >
              <li key="contact">Contato</li>
            </Link>
          </ul>
        </section>
      )}

    </>
  );
};

export default Navbar;
