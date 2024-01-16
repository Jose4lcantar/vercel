import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"

export default function Home() {
  return (
      <div className={styles.container}>
       
        {/*Navbar*/}
        <nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Ayuda </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Sesion </a>
          </li>
        </ul>
        </nav>
        <div className={styles.content}>
          <h1>Hola mundo </h1>
        </div>
        <Footer/>
      </div>  


  )
}