import type { NextPage } from 'next'
import styles from '../styles/layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navigation-bar'

const name = 'Jeppe Løvstad'
export const siteTitle = 'Jeptech.dk'

const Layout = ({ children, home }: any) => {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="The personal website of Software Developer Jeppe Løvstad"
                />
            </Head>
            <meta
                property="og:image"
                content={`https://www.jeptech.dk/_next/image?url=%2Fimages%2FLasseWut.png&w=640&q=75`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />


            <header className={styles.header}>
                <div className={styles.nav_line} />
                <Navbar name={name} />
            </header>

            <main className={styles.body}>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>

    )
}

export default Layout