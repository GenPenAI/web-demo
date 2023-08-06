import Link from 'next/link';
import Image from 'next/image';
import styles from './modules/Header.module.css';
import '../styles/globals.css';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/home">
      <a>
        <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />
      </a>
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/research-overview"><a className={styles.button}>Research</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/research-overview"><a className={styles.button}>Overview</a></Link></li>
            <li><Link href="/research-index"><a className={styles.button}>Index</a></Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/product-overview"><a className={styles.button}>Product</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/product-overview"><a className={styles.button}>Overview</a></Link></li>
            <li><Link href="/scratchpad"><a className={styles.button}>ScratchPad</a></Link></li>
            <li><Link href="/journal"><a className={styles.button}>Journal</a></Link></li>
            <li><Link href="/aide"><a className={styles.button}>AIDE</a></Link></li>
            <li><Link href="/holly"><a className={styles.button}>Holly</a></Link></li>
            <li><Link href="/customer-stories"><a className={styles.button}>Customer Stories</a></Link></li>
            <li><Link href="/pricing"><a className={styles.button}>Pricing</a></Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/developer-overview"><a className={styles.button}>Developers</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/developer-overview"><a className={styles.button}>Overview</a></Link></li>
            <li><Link href="/developer-docs"><a className={styles.button}>Docs</a></Link></li>
            <li><Link href="/developer-api"><a className={styles.button}>API Reference</a></Link></li>
            <li><Link href="/developer-examples"><a className={styles.button}>Examples</a></Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about"><a className={styles.button}>Company</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/about"><a className={styles.button}>About</a></Link></li>
            <li><Link href="/blog"><a className={styles.button}>Blog</a></Link></li>
            <li><Link href="/careers"><a className={styles.button}>Careers</a></Link></li>
            <li><Link href="/charter"><a className={styles.button}>Charter</a></Link></li>
          </ul>
        </li>
      </ul>
    </nav>
 
    <div className={styles.buttons}>
      <Link href="https://genpen.io/login.xhtml"><a className={styles.loginButton}>Login</a></Link>
      <Link href="https://genpen.io/signup.xhtml"><a className={styles.signUpButton}>Sign Up</a></Link>
    </div>
  </header>
);
