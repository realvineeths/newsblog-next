import React from 'react'
import Link from 'next/link'
import nstyles from  '../styles/nav.module.scss'

function Navbar() {
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
                <li ><a>Home</a></li>
                {/* <li ><a ><i class="fa-solid fa-heart"></i></a></li> */}
                {/* <li><a >Contact Us <i className="fa fa-user"></i></a></li> */}
                <li><a href="#">Contact</a></li>
                {/* <li><a href="/" onClick={logoutHandler}>Logout</a></li> */}
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </nav>

    </>
  )
}

export default Navbar