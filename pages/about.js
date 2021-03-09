import Head from 'next/head'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About!</title>
      </Head>
      <h1>About!</h1>
      <p>We make stuff!</p>      
    </div>
  )
}

export default about