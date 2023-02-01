import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import OverallStats from '@/components/info/overallStats'
import GranteeCard from '@/components/info/granteeCard'

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
                <h1 className="mt-24 mb-8 text-4xl headline text-success">GR15 Round</h1>
                <OverallStats />
                <div className="flex gap-4 flex-wrap mx-auto max-w-screen-xl my-24 justify-content-between">
                    {Array.from({ length: 24 }, (_, idx) => <GranteeCard key={idx} />)}
                </div>
            </div>
        </>
    )
}
