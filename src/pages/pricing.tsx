import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/modules/pricing.module.css'
import Link from 'next/link'
import '../styles/globals.css';

const Pricing = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          
              <p className={styles.paragraph}>
                Pricing<br />from basic to<br />comprehensive
              </p>
              <Link href="https://genpen.io/login.xhtml" className={styles.button}>Contact Sales</Link>
              <Link href="" className={styles.link}>Learn More</Link>
            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          <h3>Latest Updates</h3>
                <div className={styles.section}>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 1" className={styles.image}/>
              <Link href="/link/to/post1" className={styles.button}>Blog post 1</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 2" className={styles.image}/>
              <Link href="/link/to/post2" className={styles.button}>Blog post 2</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 3" className={styles.image}/>
              <Link  href="/link/to/post3" className={styles.button}>Blog post 3</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 4" className={styles.image}/>
              <Link href="/link/to/post4" className={styles.button}>Blog post 4</Link>
            </div>
          </div>
          <hr />
<div className={styles.container}>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Image 4" className={styles.image1}/>
  </div>
  <div className={styles.paragraphContainer}>
    <blockquote className={styles.quote}>
      INK
    </blockquote>
    <p className={styles.paragraph1}>
      Just as data<br/>powers your phone<br/> INK lets your<br/>GenPen AI flow.
    </p>
  </div>
</div>
<hr />


          <div>
          <h1 className={styles.titleEnd}>Start creating with GenPen AI's <br /> powerful tools.</h1>
          <div className={styles.buttonsContainerBottom}>
         <div className={styles.buttons1}>
        <Link href="https://genpen.io/signup.xhtml" className={styles.button}>Sign Up</Link>
        <Link href="https://genpen.io/login.xhtml" className={styles.button}>Login</Link>
        </div>
        </div>
        <hr />
         </div>

          <Footer />
      </div>
  );s
}

export default Pricing;