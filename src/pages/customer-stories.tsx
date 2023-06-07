import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import styles from '../components/customer-stories.module.css'
import Link from 'next/link'

const CustomerStories = () => {
  return (
      <div>
          <Header />
          <div className={styles.page}>
      <h1 className={styles.bigHeader}>Our Customer Stories</h1>
      <p className={styles.indentedParagraph}>
        Here are some of the stories shared by our satisfied customers.
      </p>
    </div>
    <hr />
    <h3>Latest Updates</h3>
                <div className={styles.section}>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 1" className={styles.image}/>
              <Link href="/link/to/post1">Blog post 1</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 2" className={styles.image}/>
              <Link href="/link/to/post2">Blog post 2</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 3" className={styles.image}/>
              <Link  href="/link/to/post3">Blog post 3</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 4" className={styles.image}/>
              <Link href="/link/to/post4">Blog post 4</Link>
            </div>
          </div>
          <br />
                <div className={styles.section}>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 1" className={styles.image}/>
              <Link href="/link/to/post1">Blog post 1</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 2" className={styles.image}/>
              <Link href="/link/to/post2">Blog post 2</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 3" className={styles.image}/>
              <Link  href="/link/to/post3">Blog post 3</Link>
            </div>
            <div className={styles.sectionItem}>
              <img src="/logotri.png" alt="Image 4" className={styles.image}/>
              <Link href="/link/to/post4">Blog post 4</Link>
            </div>
          </div>
          <hr />



          <Footer />
      </div>
  );
}

export default CustomerStories;