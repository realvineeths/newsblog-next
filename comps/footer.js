import React from 'react'
import fstyles from '../styles/foot.module.css'

function Footer() {
  return (
    <div className={fstyles.footer}>
        <div className={fstyles.complogo}>
            {/* <img src="../img/companylogo.png" alt="logo"> */}
        </div>
        <h4>Follow us on:</h4>
        <div className={fstyles.logo}>
            <a href="https://twitter.com/" className={fstyles.hoverlogo}><i className="fa fa-twitter" ></i></a>
            {/* <a href="https://twitter.com/" className={fstyles.hoverlog}> <FontAwesomeIcon icon={faSearch} style={{ fontSize: 20, color: "blue" }} */}
      {/* /></a> */}
            <a href="https://www.facebook.com/" className={fstyles.hoverlogo}><i className={"fa fa-facebook"}></i></a>
            <a href="https://www.youtube.com/" className={fstyles.hoverlogo}><i className="fa fa-youtube-play"></i></a>
            <a href="https://www.instagram.com/" className={fstyles.hoverlogo}><i className="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" className={fstyles.hoverlogo}><i className="fa fa-linkedin"></i></a>
        </div>

        <h4><i className={"fa fa-copyright"}>2014-2023,Hourly News,Inc or its affliates</i></h4>

        <div className={fstyles.terms}>
            <div className={fstyles.logo}>
                <a href="#">Privacy Policy</a>
                <a href="#">~Terms & Conditions~</a>
                <a href="#">Cookie Policy~</a>
                <a href="#">Disclaimer</a>
            </div>
        </div>
    </div>
  )
}

export default Footer