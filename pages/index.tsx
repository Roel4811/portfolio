/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Roel de Jong</title>
        <meta name='description' content='Portfolio Roel de Jong' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Raleway:ital,wght@0,300;0,400;0,500;0,700;1,800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.pageWrapper}>
        <div className={styles.navbar}>
          <Image
            src={'/images/roeldj-logo.svg'}
            width={'64px'}
            height={'34px'}
            alt='roeldj logo'
          />

          <div className={styles.socialLinks}>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/github-icon.svg'}
                width={'20px'}
                height={'20px'}
                className={styles.socialIcon}
                alt='Github icon'
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={'/images/stack-overflow-icon.svg'}
                width={'20px'}
                height={'20px'}
                className={styles.socialIcon}
                alt='Stack Overflow icon'
              />
            </div>
          </div>
        </div>

        <main className={styles.main}>
          <section className={styles.banner}>
            <div className={styles.container}>
              <div className={styles.title}>
                <div className={styles.titleContent}>
                  <span>Hi there!</span>
                  <h1>I am Roel de Jong</h1>
                  <span>Software engineer and Teacher</span>
                </div>
                <div className={styles.avatar}>
                  <Image
                    src={'/images/photo-roel.png'}
                    width={'120px'}
                    height={'120px'}
                    className={styles.socialIcon}
                    alt='Photo Roel'
                  />
                </div>
              </div>

              <p className={styles.description}>
                Welcome to my portfolio page! I am a full-stack Software
                Engineer who enjoys working with Ruby, Javascript, Typescript,
                Elixir and Rust. In my days as a professional Software Engineer,
                I have been working closely with Product Owners, CTOs and
                Designers to transform ideas into production-ready web
                applications. I also contributed to many existing code bases,
                often to migrate them into flexible systems that are eas(y|ier)
                to maintain and extend. I enjoy enhancing the readability of
                code and discussing concepts and practices in a team setting to
                achieve this.
                <br />
                <br />
                Next, I teach Object Oriented programming in Ruby and JavaScript
                and in my spare time I build small (often useless) projects.
              </p>
            </div>
          </section>
          <section className={styles.clients}>
            <h2>Companies I've worked with</h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://github.com/Roel4811'
            target='_blank'
            rel='noopener noreferrer'
          >
            Made with love by roeldj
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
