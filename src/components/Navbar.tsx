import React, { useCallback, useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import styles from '../styles/components/Navbar.module.css';

import Logo from '../../public/logo';

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className={styles.container}>
      <section className={styles.bar}>
        <Logo />
        {isMenuOpen
          ? <FiX size={40} onClick={handleOpenMenu} />
          : <FiMenu size={40} onClick={handleOpenMenu} />}
      </section>

      {isMenuOpen && (
        <section className={styles.menu}>
          <ul>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default Navbar;
