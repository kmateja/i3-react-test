import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../pages/api/data.json'
import Navbar from "../components/Navbar.js"
import Parent from "../components/Parent"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={styles.navigation}>
          <div className={styles.navigation_wrapper}>
            <Navbar/>
            <div className={styles.image_logo}>
              <Image src={data.logo} width={70} height={70}/>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>

          <Parent/>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mateja Knezić
        </a>
      </footer>
    </div>
  )
}
