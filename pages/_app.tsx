import Sidebar from '@/components/layout/sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Peralta } from '@next/font/google'

const peralta = Peralta({
    subsets: ["latin"],
    weight: '400'
});

export default function App({ Component, pageProps }: AppProps) {
    return <main>
        <style jsx global>{`
            .headline {
                font-family: ${peralta.style.fontFamily}
            }
        `}</style>
        <Sidebar>
            <Component {...pageProps} />
        </Sidebar>
    </main>
}
