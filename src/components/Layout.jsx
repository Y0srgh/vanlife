import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './navBar';
import Footer from './footer';

export default function Layout() {
    return (
        <div className="site-wrapper">
            <NavBar/>
            <main>
            <Outlet />
            </main>
            <Footer/>
        </div>
    )
}