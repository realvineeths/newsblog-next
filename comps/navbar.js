import React from 'react'
import Link from 'next/link'
import nstyles from  '../styles/nav.module.scss'

function Navbar(props) {
  return (
    <>
        <nav className={nstyles.navbar}>
        <div className={nstyles.container}>

            <div className={nstyles.navbarheader}>
                <a>
                    <h4>Hourly<span>News</span></h4>
                </a>
            </div>

            <div className={nstyles.navbarmenu} id="open-navbar1">
            <ul className={nstyles.navbarnav}>
                <li ><a href='/'>Home</a></li>
                <li><a href="/">Contact</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </nav>

    </>
  )
}

export default Navbar