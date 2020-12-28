import styles from './navbar.module.css'

export default function Navbar() {
  const {navbar, navbar_routes, navbarButton, logoLink, navbarWebsiteName, websiteName} = styles
  return (
    <nav className={navbar}>
            <div className={navbar_routes}>
                <a className={navbarButton} href="#Home"><img src="hanyang-logo.png" alt="Hanyang Bunshik Logo" className={logoLink}/></a>
                <a className={navbarButton} href="#About">About</a>
                <a className={navbarButton} href="#Menu">Menu</a>
                <a className={navbarButton} href="#Location">Location</a>
            </div>
            <a className={navbarWebsiteName} href="#Home"><p className={websiteName}> 한양분식 &bull; Hanyang Bunshik</p></a>
      </nav>
  )
}
