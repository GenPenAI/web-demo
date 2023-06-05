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
        <div className={styles.container}>
          <h2 className={styles.smallHeader}>Join Us to build a <br />brighter future for<br />AIE</h2>
          <Link href="./components/companyCareers">View Opportunities</Link>
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







      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected>
    </div>
  )
}
