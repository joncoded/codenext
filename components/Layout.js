import Navigation from './Navigation'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />          
          {children}
        </main>
        <footer className={styles.footer}>
          &copy; current year
        </footer>
      </div>

    </>

  )
}

export default Layout