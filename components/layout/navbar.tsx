import React from 'react'
import { List } from 'phosphor-react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className="navbar border-b-2 border-slate-400/10">
            <label htmlFor="sidebar" className="btn btn-square btn-ghost drawer-button lg:hidden">
                <List size={32} />
            </label>
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl font-bold">Legos Hermanos</Link>
            </div>
        </div>
    )
}

export default Navbar