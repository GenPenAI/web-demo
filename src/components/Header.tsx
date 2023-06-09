// components/Header.tsx

import Link from 'next/link';
import styles from './Header.module.css';
import { Connect } from '../components/Connect';
import '../styles/globals.css';

export const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </a>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="/research-overview">Research</a>
          <ul className={styles.submenu}>
            <li><a href="/research-overview">Overview</a></li>
            <li><a href="/research-index">Index</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/product-overview">Product</a>
          <ul className={styles.submenu}>
            <li><a href="/product-overview">Overview</a></li>
            <li><a href="/scratchpad">ScratchPad</a></li>
            <li><a href="/journal">Journal</a></li>
            <li><a href="/ai1de">AI-IDE</a></li>
            <li><a href="/holly">Holly</a></li>
            <li><a href="/customer-stories">Customer Stories</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/developer-overview">Developers</a>
          <ul className={styles.submenu}>
            <li><a href="/developer-overview">Overview</a></li>
            <li><a href="/developer-docs">Docs</a></li>
            <li><a href="/developer-api">API Reference</a></li>
            <li><a href="/developer-examples">Examples</a></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <a href="/about">Company</a>
          <ul className={styles.submenu}>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/charter">Charter</a></li>
          </ul>
        </li>
      </ul>
    </nav>
 
    <div className={styles.buttons}>
      <Link href="https://genpen.io/login.xhtml" className={styles.loginButton}>Login
      </Link>
      <Link href="https://genpen.io/signup.xhtml" className={styles.signUpButton}>Sign Up
      </Link>
    </div>
  </header>
);
