import React from 'react'
import Navbar from './navbar'

const Sidebar = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-50">
                <Navbar />
                {children}
            </div>
            <div className="drawer-side ">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content border-r-2 border-gray-400/10">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar