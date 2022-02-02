import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
        priority
        src="/images/SWC_small.jpg"
        className={utilStyles.borderCircle}
        quality={100}
        height={200}
        width={200}
      />
      <div className={utilStyles.body_text}>
        <div className={utilStyles.headingXl}>
          Hello,
        </div>
        <div className={utilStyles.headingLg}>
          I'm Jeppe.
        </div>
        <div className={utilStyles.headingLg}>
          BI Software Developer.
        </div>
      </div>
    </Layout>
  )
}

export default Home
