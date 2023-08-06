import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './modules/Header.module.css';
import '../styles/globals.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/home">
        
          <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />
        
      </Link>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/research-overview" className={styles.button}>Research</Link>
          <ul className={styles.submenu}>
            <li><Link href="/research-overview" className={styles.button}>Overview</Link></li>
            <li><Link href="/research-index" className={styles.button}>Index</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/product-overview" className={styles.button}>Product</Link>
          <ul className={styles.submenu}>
            <li><Link href="/product-overview" className={styles.button}>Overview</Link></li>
            <li><Link href="/scratchpad" className={styles.button}>ScratchPad</Link></li>
            <li><Link href="/journal" className={styles.button}>Journal</Link></li>
            <li><Link href="/aide" className={styles.button}>AIDE</Link></li>
            <li><Link href="/holly"className={styles.button}>Holly</Link></li>
            <li><Link href="/customer-stories"className={styles.button}>Customer Stories</Link></li>
            <li><Link href="/pricing" className={styles.button}>Pricing</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/developer-overview" className={styles.button}>Developers</Link>
          <ul className={styles.submenu}>
            <li><Link href="/developer-overview" className={styles.button}>Overview</Link></li>
            <li><Link href="/developer-docs" className={styles.button}>Docs</Link></li>
            <li><Link href="/developer-api" className={styles.button}>API Reference</Link></li>
            <li><Link href="/developer-examples" className={styles.button}>Examples</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about" className={styles.button}>Company</Link>
          <ul className={styles.submenu}>
            <li><Link href="/about" className={styles.button}>About</Link></li>
            <li><Link href="/blog" className={styles.button}>Blog</Link></li>
            <li><Link href="/careers" className={styles.button}>Careers</Link></li>
            <li><Link href="/charter" className={styles.button}>Charter</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
 
    <div className={styles.buttons}>
        <Link href="https://genpen.io/login.xhtml" className={styles.loginButton}>Login</Link>
        <Link href="https://genpen.io/signup.xhtml" className={styles.signUpButton}>Sign Up</Link>
      </div>
    </header>
  );
};