import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import OverallStats from '@/components/info/overallStats'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Legos Hermanos</title>
                <meta name="description" content="Welcome to Legos Hermanos, the home MVP about legos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto text-center mt-20">
                <OverallStats />
            </div>
        </>
    )
}
