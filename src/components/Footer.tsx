// components/Header.tsx

import Link from 'next/link';
import styles from './Header.module.css';
import { Connect } from '../components/Connect';

export const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/">
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/research">Research</Link>
          <ul className={styles.submenu}>
            <li><Link href="/overview">Overview</Link></li>
            <li><Link href="/index">Index</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/product">Product</Link>
          <ul className={styles.submenu}>
            <li><Link href="/overview">Overview</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/ai-ide">AI-IDE</Link></li>
            <li><Link href="/holly">Holly</Link></li>
            <li><Link href="/customer-stories">Customer Stories</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/developers">Developers</Link>
          <ul className={styles.submenu}>
            <li><Link href="/overview">Overview</Link></li>
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/api-reference">API Reference</Link></li>
            <li><Link href="/examples">Examples</Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/company">Company</Link>
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
      <Link href="/login" className={styles.loginButton}>Login
      </Link>
      <Link href="/signup" className={styles.signUpButton}>Sign Up
      </Link>
    </div>
  </footer>
);
