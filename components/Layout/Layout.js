import Head from 'next/head'
import styles from './layout.module.css'
export const siteTitle = 'Hanyang Bunshik • 한양분식'

// export async function getStaticProps() {

// }

export default function Layout({children}) {
  const {attribute, store_info, copyright, footer_container} = styles
  return (
      <div>
        <Head>
          <meta
            name="description"
            content="Hanyang Bunshik offers a wide variety of authentic Korean Cuisine Street Food for dine-in or to-go! For 22 years strong, Hanyang Bunshik has successfully labeled itself as the go-to place to satisfy your Korean Cuisine cravings in a convenient and inexpensive manner."
          />
          <meta property="og:image" content="/images/interior3.JPG" />
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://andersonyoon.com/" /> */}
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content="Hanyang Bunshik offers a wide variety of authentic Korean Cuisine Street Food for dine-in or to-go! For 22 years strong, Hanyang Bunshik has successfully labeled itself as the go-to place to satisfy your Korean Cuisine cravings in a convenient and inexpensive manner." />
          <link rel="icon" href="/hanyang-logo.png" />
        </Head>
        <main id="Home">{children}</main>
        <footer id={footer_container}>
            <p className={copyright}>Copyright &copy; Hanyang Bunshik. All rights reserved</p>
            <div className={store_info}>
                <p>Business Hours: 24 / 7</p>
                <p><a href="tel:+19172852257">Tel#: (917) 285-2257</a></p>
                <p>Address: 150-51 Norther Blvd, Flushing NY 11354</p>
            </div>
            <div className={attribute}>
                <p>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
            </div>
        </footer>
      </div>
  )
}
