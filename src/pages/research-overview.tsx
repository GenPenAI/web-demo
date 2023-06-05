// research-overview.tsx
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';
import '../styles/globals.css';
import styles from '../components/research-overview.module.css';

const ResearchOverview = () => {
  return (
    <div>
      <Header />
      <div className={styles.researchOverview}>
        <blockquote className={styles.quote}>
          Offering AGI <br /> a Seat at the <br /> Table
        </blockquote>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Our systems allow humans and AI <br /> to interact and discuss the best
            route <br /> forward. Building the protocol for <br /> governance of these
            discussions is our <br />mission.
          </p>
          <div className={styles.buttons}>
            <Link href="/research-index"
              className={styles.button}>View Research Index
            </Link>
            <Link href="/governance"
              className={styles.button}>Learn More About Governance
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.sectionItem}>
    <img src="/logo.png" alt="Research at GenPen AI" className={styles.image}/>
   
  </div>
  <hr />
  <div >
        <blockquote className={styles.quote2}>
          Researching <br /> the forefront <br /> of AIE
        </blockquote>
        </div>
  <hr /> 

  <div >
        <blockquote className={styles.quote}>
          Focus Areas
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
        <div >
        <blockquote className={styles.quote}>
          API Gen
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
          Image
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
          Text
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
          Voice
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
        <div className={styles.sectionItem}>
    <img src="/logo.png" alt="Research at GenPen AI" className={styles.image}/>
   
  </div>
  <hr />
  <h1 className={styles.title}>Join us to make a brighter future.</h1>
  <div className={styles.buttons}>
    <Link href="/companyCareers" className={styles.button}>Begin Session</Link>
  </div>
<hr />
      <Footer />
    </div>
  );
};

export default ResearchOverview;
