import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar.js'
import Carousel from '../components/Carousel/Carousel.js'
import About from '../components/About/About.js'
import Menu from '../components/Menu/Menu.js'
import Location from '../components/Location/Location.js'
import Popup from '../components/Popup/Popup.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {section_divider, background} = styles
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>


      </Head>
      <div className={background}></div>
      <Navbar/>
      <Carousel />
      <About />
      <div className={section_divider}></div>
      <Menu/>
      <Location />
      <Popup />
    </Layout>
  )
}
