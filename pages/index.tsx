import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import apiGithub from './api/github'

const Home: NextPage = () => {
  const curYear = new Date().getFullYear();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel R. - Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Portfólio
        </h1>

        <p className={styles.description}>
          Lista de projetos{' - '}
          <a href="https://github.com/gabrielripardo?tab=repositories">Github</a>
          
        </p>

        <div className={styles.grid}>
          <p className={styles.description}>
            Projects here          
          {/* <code className={styles.code}>pages/index.tsx</code> */}
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
         Gabriel Ripardo | {curYear}
        </a>
      </footer>
    </div>
  )
}

export default Home
