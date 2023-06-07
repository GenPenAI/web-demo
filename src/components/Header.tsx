// components/Header.tsx

import Link from 'next/link';
import styles from './Header.module.css';
import { Connect } from '../components/Connect';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/research-overview">Research</Link>
          <ul className={styles.submenu}>
            <li><Link href="/research-overview">Overview</Link></li>
            <li><Link href="/research-index">Index</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/product-overview">Product</Link>
          <ul className={styles.submenu}>
            <li><Link href="/product-overview">Overview</Link></li>
            <li><Link href="/scratchpad">ScratchPad</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/ai1de">AI-IDE</Link></li>
            <li><Link href="/holly">Holly</Link></li>
            <li><Link href="/customer-stories">Customer Stories</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/developer-overview">Developers</Link>
          <ul className={styles.submenu}>
            <li><Link href="/developer-overview">Overview</Link></li>
            <li><Link href="/developer-docs">Docs</Link></li>
            <li><Link href="/developer-api">API Reference</Link></li>
            <li><Link href="/developer-examples">Examples</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">Company</Link>
          <ul className={styles.submenu}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/charter">Charter</Link></li>
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
