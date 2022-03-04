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
            <h2>Companies I&apos;ve worked with</h2>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/rodeo-logo.png'}
                    width={'300px'}
                    height={'157px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  Rodeo is a fast growing SaaS, offering a Project Management
                  Tool for small and medium businesses in the Create Industry. I
                  helped migrating the legacy system to a stable and
                  feature-rich application. Tools used were Typescript,
                  React.js, Hasura, PostgreSQL and GeaphQL
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/restaurantkaart-logo.png'}
                    width={'300px'}
                    height={'300px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  RestaurantKaart was a fast growing membership for restaurant
                  lovers. I extended the platform with an automated reservation
                  system, talking with a mobile application and I created an
                  extensive backend system for memberships, payments,
                  localisation and restaurant holders. This was all done with
                  Ruby on Rails.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/le-wagon-logo.png'}
                    width={'240px'}
                    height={'153px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  Teaching for Le Wagon has been a passion since 2017. I&apos;ve
                  helped over 1000 students in their journey of becoming a
                  Software Engineer, lecturing on Object Oriented Programming,
                  and building MVPs.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/pentest-gids-logo.svg'}
                    width={'300px'}
                    height={'343px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  For PentestGids.nl I created the full website using the
                  JAM-stack architecture. An SEO optimized Next.js app in React
                  together with content hosted on an external CMS to give full
                  flexibility to the Customer on releasing content.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/pixie-lab-logo.png'}
                    width={'300px'}
                    height={'295px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  For Pixie Lab I supported on building an MVP with a Ruby on
                  Rails Application.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/vta-assurances-logo.png'}
                    width={'300px'}
                    height={'300px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  VTA Assurances is a French MMA insurance company for which I
                  created a new website using the JAM-stack architecture. As the
                  company is growing to different markets, SEO and multiple
                  languages are supported together with an easy Blogging system.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/de-snijtafel-logo.png'}
                    width={'240px'}
                    height={'240px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  De Snijtafel is a project by Kasper C. Jansen. For his new
                  website I collaborated with Hedzer Zijlsra to make a Nuxt app
                  (Vue.js) for a fast SEO optimized blog + brand website.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/softwareguru-logo.png'}
                    width={'300px'}
                    height={'64px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  SoftwareGuru is a comparison application with specific needs
                  on the admin. For a custom-made stable yet feature-rich admin
                  I used Ruby on Rails.
                </p>
              </div>
              <div className={`${styles.card} ${styles.lastCard}`}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/rodeo-logo.png'}
                    width={'300px'}
                    height={'100px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos eligendi nisi blanditiis animi distinctio
                  quibusdam deleniti, aliquam temporibus iste enim?
                </p>
              </div>
              <div className={`${styles.card} ${styles.lastCard}`}>
                <div className={styles.cardImage}>
                  <Image
                    src={'/images/rodeo-logo.png'}
                    width={'300px'}
                    height={'100px'}
                    alt={'partner-logo'}
                  />
                </div>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos eligendi nisi blanditiis animi distinctio
                  quibusdam deleniti, aliquam temporibus iste enim?
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://github.com/Roel4811'
            target='_blank'
            rel='noopener noreferrer'
          >
            Made by roeldj
          </a>
        </footer>
      </div>
    </>
  )
}

export default Home
