import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/product-overview.module.css'
import Link from 'next/link'
import '../styles/globals.css';

const ProductOverview = () => {
  return (
      <div>
          <Header />
          <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          Turning <br /> humans into <br /> engineers
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph1}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          <div className={styles.buttons}>
            <Link href="/research-index"
              className={styles.button}>Get started
            </Link>
            <Link href="/governance"
              className={styles.button}>For developers
            </Link>
          </div>
        </div>
      </div>
      <hr />
          <img src="/logo.png" alt="Research at GenPen AI" className={styles.image}/>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Models
        </blockquote>

        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          ScratchPad <br /> & <br /> Journal
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
         AI-DE
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Holly
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
          <hr />
        <div >
        <blockquote className={styles.quote}>
          Code Gen
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          </div>
        </div>
        <hr />
          <Footer />
      </div>
  );
}

export default ProductOverview;
