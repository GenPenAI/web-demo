import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/modules/journal.module.css'
import Link from 'next/link'
import '../styles/globals.css';
import Image from 'next/image';

const Journal = () => {
    return (
        <div>
            <Header />
            <div className={styles.page}>
             <h1 className={styles.title}>Commit Context to <br />Memory and Keep Chats in<br />Check with Simple Pricing</h1>
            <div className={styles.buttons}>
            <a href="https://genpen.io/login.xhtml" className={styles.button}>Try on the Web
            </a>
             <a href="https://www.youtube.com/@genpenai"
             className={styles.button}>Learn more about GenPen
             </a>
             </div>
            </div>
            <hr />
            <h3>Latest Updates</h3>
            <div className={styles.section}>
            <div className={styles.sectionItem}>
              <Image src="/logotri.png" alt="Image 1" className={styles.image}/>
              <a href="/link/to/post1" className={styles.button}>Blog post 1</a>
            </div>
            <div className={styles.sectionItem}>
              <Image src="/logotri.png" alt="Image 2" className={styles.image}/>
              <a href="/link/to/post2" className={styles.button}>Blog post 2</a>
            </div>
            <div className={styles.sectionItem}>
              <Image src="/logotri.png" alt="Image 3" className={styles.image}/>
              <a  href="/link/to/post3" className={styles.button}>Blog post 3</a>
            </div>
            <div className={styles.sectionItem}>
              <Image src="/logotri.png" alt="Image 4" className={styles.image}/>
              <a href="/link/to/post4" className={styles.button}>Blog post 4</a>
            </div>
          </div>
          <hr />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <h2 className={styles.header}>Journal</h2>
              <p className={styles.paragraph}>
                Leverage our enhanced<br />models with memory and<br />provisioning inside your<br />account.
              </p>
              <a href="https://genpen.io/login.xhtml" className={styles.button}>Try on the web</a>
            </div>
            <div className={styles.imageContainer}>
              <Image src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          <div className={styles.section}>
            <h2 className={styles.smallHeader}>Content & Ownership</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Ownership</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Images</td>
                    <td>You</td>
                    <td><a href="https://genpen.io/login.xhtml" className={styles.button}>Try Now</a></td>
                </tr>
                <tr>
                  <td>Code</td>
                  <td>You</td>
                  <td><a href="https://genpen.io/login.xhtml" className={styles.button}>Try Now</a></td>
                </tr>
                <tr>
                  <td>Text</td>
                  <td>You</td>
                  <td><a href="https://genpen.io/login.xhtml" className={styles.button}>Try Now</a></td>
                </tr>
              </tbody>
            </table>
            </div>
            <hr />
            <Footer />
        </div>
    );
}

export default Journal;
