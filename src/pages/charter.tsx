import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/charter.module.css'
import Link from 'next/link'
import '../styles/globals.css';
const Charter = () => {
  return (
      <div>
          <Header />
          <div className={styles.quoteSection}>
            <div className={styles.textContainer}>
          <h1 className={styles.header}>GenPen AI Charter</h1>
              <p className={styles.paragraph}>
                Our Charter describes the<br/>principles we use to execute<br/>on GenPen AI's mission.
              </p>
            
            </div>
            <div className={styles.imageContainer}>
              <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
            </div>
          </div>
          <hr />
          <div className={styles.sectionCharter}>
      <h2 className={styles.headerCharter}>Published May 1, 2023</h2>
  <p className={styles.paragraphCharter}>
  This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
    This is a placeholder text. Please replace this with your actual content.
    Your long paragraph text goes here. This is a placeholder text. 
    Please replace this with your actual content. <br/>
  </p>
</div>


<hr/>
          <Footer />
      </div>
  );
}

export default Charter;