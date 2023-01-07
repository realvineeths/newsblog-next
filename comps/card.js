import React from 'react'
import cstyles from '../styles/card.module.css'
import Image from 'next/image'
// import mypic from ""

function Card(props) {
    console.log('in..',props.title);

  return (
    // https://picsum.photos/id/403/300/200
    <>
        <div className={`${cstyles.card} ${cstyles.hover}`} id="card">
                <div className={cstyles.cardheader}>
                    <Image src={props.imge} alt="Picture of the author" width={300} height={200}/>
                </div>
                <div className={cstyles.cardcaption}>
                    <span className={`${cstyles.tag} ${cstyles.tagteal}`}>{props.tag}</span>
                    <h3 id="ht">{props.title}</h3>
                    <p>
                        {props.smalldes}
                    </p>
                <div className="user">
                    <h5>{props.user}</h5>
                    <small>{props.timeline}</small>
                </div>
                </div>
        </div>
    </>
  )
}

export default Card