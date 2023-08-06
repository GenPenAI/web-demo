import Link from 'next/link';
import Image from 'next/image';
import styles from './modules/Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/">
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
          <Link href="/product-overview"><a>Product</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/product-overview"><a>Overview</a></Link></li>
            <li><Link href="/scratchpad"><a>ScratchPad</a></Link></li>
            <li><Link href="/journal"><a>Journal</a></Link></li>
            <li><Link href="/ai1de"><a>AI-IDE</a></Link></li>
            <li><Link href="/holly"><a>Holly</a></Link></li>
            <li><Link href="/customer-stories"><a>Customer Stories</a></Link></li>
            <li><Link href="/pricing"><a>Pricing</a></Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/developer-overview"><a>Developers</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/developer-overview"><a>Overview</a></Link></li>
            <li><Link href="/developer-docs"><a>Docs</a></Link></li>
            <li><Link href="/developer-api"><a>API Reference</a></Link></li>
            <li><Link href="/developer-examples"><a>Examples</a></Link></li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about"><a>Company</a></Link>
          <ul className={styles.submenu}>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/careers"><a>Careers</a></Link></li>
            <li><Link href="/charter"><a>Charter</a></Link></li>
          </ul>
        </li>
      </ul>
    </nav>
 
    <div className={styles.buttons}>
      <Link href="https://genpen.io/login.xhtml"><a className={styles.loginButton}>Login</a></Link>
      <Link href="https://genpen.io/signup.xhtml"><a className={styles.signUpButton}>Sign Up</a></Link>
    </div>
    <hr/>
    <div className={styles.titleFooter}>
        <h1>GenPen AI © 2022-2023</h1>
        <div className={styles.socialFooter}>
          <Link href="https://twitter.com/GenPenAI"><a className={styles.socialFooter}>Twitter</a></Link>
          <Link href="https://www.youtube.com/@genpenai"><a className={styles.socialFooter}>Youtube</a></Link>
          <Link href="https://github.com/genpenai"><a className={styles.socialFooter}>Github</a></Link>
          <Link href="https://linkedin.com/genpenai"><a className={styles.socialFooter}>Linkedin</a></Link>
          <Link href="/terms"><a className={styles.titleFooter}>Terms</a></Link>
          <Link href="/privacy"><a className={styles.titleFooter}>Policy</a></Link>
          <Link href="/brand"><a className={styles.titleFooter}>Brand</a></Link>
        </div>
    </div>
  </footer>
);
