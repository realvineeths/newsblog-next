import React from 'react'
import fstyles from '../styles/foot.module.css'

function Footer(props) {
  return (
    <div className={fstyles.footer}>

        <h4><i className={"fa fa-copyright"}>2014-2023,Hourly News,Inc or its affliates</i></h4>

        <div className={fstyles.terms}>
            <div className={fstyles.logo}>
                <a href="/">Privacy Policy</a>
                <a href="/">~Terms & Conditions~</a>
                <a href="/">Cookie Policy~</a>
                <a href="/">Disclaimer</a>
            </div>
        </div>
    </div>
  )
}

export default Footer