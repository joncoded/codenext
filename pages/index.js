import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Next!</title>
      </Head>
      <h1>The next Next page!</h1>      
    </div>
  )
}
