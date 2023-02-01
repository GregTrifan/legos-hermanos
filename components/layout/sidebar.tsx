import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'

const Sidebar = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-300">
                <Navbar />
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar" className="drawer-overlay"></label>

                <ul className="menu font-sans font-semibold p-4 w-80 bg-base-100 text-base-content border-r-2 border-slate-400/10">
                    <p className="font-sans font-bold text-slate-300/30">ROUNDS</p>
                    <li><Link href="/">GR15</Link></li>
                    <li><Link href="/rounds/fantom">Fantom</Link></li>
                    <li><Link href="/rounds/unicef">Unicef</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar