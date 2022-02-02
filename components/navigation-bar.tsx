import type { NextPage } from 'next'
import styles from '../styles/layout.module.css'
import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const Navbar = ({ name }: { name: string }) => {
    return (

        <div className={styles.nav}>
            <Link href="/" >{name}</Link>
            <div>
                <Link href="/" ><a className={styles.nav_item}>Home</a></Link>
                <Link href="#" ><a className={styles.nav_item}>Projects</a></Link>
                <Link href="/me" ><a className={styles.nav_item}>Me</a></Link>
            </div>
        </div>

    )
}


export default Navbar
