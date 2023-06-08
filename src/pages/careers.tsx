import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/careers.module.css'
import Link from 'next/link'
import '../styles/globals.css';

const Careers = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          
              <p className={styles.paragraph}>
                Join us to build<br/>a brighter future
              </p>
              <Link href="https://genpen.io/login.xhtml" className={styles.button}>View all Opportunities</Link>
            </div>
            <div className={styles.imageContainer}>
              <p>Developing AI Enhanced tools<br/>requires humans from a wide range<br/>of disciplines and backgrounds.<br/>We're always looking for the best<br/>minds to join our globally remote<br/>team.</p>
            </div>
          </div>
          <hr />
          <div className="videoContainer">
           <video autoplay loop muted>
           <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video.
          </video>
          </div>
          <hr/>
          <div className={styles.quoteSection2}>
            <p className={styles.quote2}>
              "This is a quote that takes up 50% of the viewport height"
            </p>
          </div>
          <hr/>
          <div className={styles.section3}>
              <h2 className={styles.header3}>Core Values</h2>
              <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 1</strong>
                      <p className={styles.bulletDescription}>Description of Value 1...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
                  <li className={styles.bulletItem}>
                      <strong className={styles.bulletTitle}>Value 2</strong>
                      <p className={styles.bulletDescription}>Description of Value 2...</p>
                  </li>
              </ul>
          </div>
          <div className={styles.imageContainer2}>
            <img src="/logo.png" alt="Image description" className={styles.fullWidthImage2}/>
          </div>
          <hr/>
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
              <p className={styles.paragraph}>
                Benefits
              </p>
            </div>
            <div className={styles.imageContainer2}>
            <p>We know that well-being<br/> is at the center of everyday life. Our comprehensive benefits<br/> package supports you where<br/> you are, so you can take care<br/> of what matters today while<br/> confidently planning for the future.</p>
            </div>
            </div>
          
          





          <Footer />
      </div>
  );
}

export default Careers;