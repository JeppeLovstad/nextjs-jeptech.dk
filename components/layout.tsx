import styles from '../styles/layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Jeppe Løvstad'
export const siteTitle = 'Jeptech.dk'

export default function Layout({ children, home }: any) {
    return (

        <div className={styles.container_header}>
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

                <a href="#" className="brand">
                    <Image
                        priority
                        src="/images/SWC_small.jpg"
                        className={utilStyles.borderCircle}
                        height={40}
                        width={40}
                        alt={name}
                    />
                </a>
                <div className={styles.nav}>
                    <Link href="#" ><a className={styles.nav_item}>Home</a></Link>
                    <Link href="#" ><a className={styles.nav_item}>Projects</a></Link>
                    <Link href="#" ><a className={styles.nav_item}>About</a></Link>
                </div>


            </header>

            <main className={styles.container_body}>{children}</main>

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
