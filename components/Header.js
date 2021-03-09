import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
      <h1 className={headerStyles.title}>Welcome to CodeNEXT</h1>
      <h2 className="description">We make basic taglines!</h2>
    </>
  )
}

export default Header