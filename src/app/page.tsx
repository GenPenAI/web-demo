import '../styles/globals.css';
import styles from '../components/Page.module.css'
import Link from 'next/link'
import { Account } from '../components/Account'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { ReadContract } from '../components/ReadContract'
import { ReadContracts } from '../components/ReadContracts'
import { ReadContractsInfinite } from '../components/ReadContractsInfinite'
import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'
import { SignMessage } from '../components/SignMessage'
import { SignTypedData } from '../components/SignTypedData'
import { Token } from '../components/Token'
import { WatchContractEvents } from '../components/WatchContractEvents'
import { WatchPendingTransactions } from '../components/WatchPendingTransactions'
import { WriteContract } from '../components/WriteContract'
import { WriteContractPrepared } from '../components/WriteContractPrepared'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Page() {
  return (
    <div>
      <Header />
     
      <div className={styles.page}>
      <h1 className={styles.title}>Introducing GenPen IDE for Remote Desktop</h1>
      <div className={styles.buttons}>
        <Link href="https://genpen.io/login.xhtml" className={styles.button}>Begin Session
        </Link>
        <Link href="https://www.youtube.com/@genpenai"
          className={styles.button}>The Making of GenPen AI
        </Link>
      </div>
      </div>
      <div className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Development Costs <br />Should be Black & <br /> White</h2>
          <Link href="./components/companyPricing"> Learn about our Pricing</Link>
        </div>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Enterprise Scale <br /> REST ful Auto- <br />Genesis</h2>
          <Link href="./components/researchOverview">Learn about our Research</Link>
        </div>
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Beginning the Basis <br /> for AI Polling with <br />Human Input</h2>
          <Link href="./components/researchIndex">Learn about our Patents</Link>
        </div>
        
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
<hr />
<h3>Template Gallery</h3>
      <div className={styles.section}>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 1" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo">Demo</Link> <br />
    <Link href="/link/to/purchase">Purchase</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 2" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo">Demo</Link> <br />
    <Link href="/link/to/purchase">Purchase</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 3" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo">Demo</Link> <br />
    <Link href="/link/to/purchase">Purchase</Link>
  </div>
  <div className={styles.sectionItem}>
    <img src="/logotri.png" alt="Image 4" className={styles.image}/>
    <h3>Title</h3>
    <h3>Price</h3>
    <Link href="/link/to/demo">Demo</Link> <br />
    <Link href="/link/to/purchase">Purchase</Link>
  </div>
</div>
<hr />
<h3>Opportunities at GenPen AI</h3>
<img src="/logo.png" alt="Big Careers Image"/>
<hr />
<div className={styles.quoteSection}>
  <blockquote className={styles.quote}>
    "Working at GenPen AI has brought <br /> me great fortune and wealth."
  </blockquote>
  <div className={styles.imageContainer}>
    <img src="/logotri.png" alt="Career Image" className={styles.careerImage}/>
  </div>
</div>
<hr />
 <h1 className={styles.title}>Join us to make a brighter future.</h1>
  <div className={styles.buttons}>
    <Link href="/companyCareers" className={styles.button}>View Opportunities</Link>
  </div>
<hr />
<Footer />
</div>
    
  )
}
