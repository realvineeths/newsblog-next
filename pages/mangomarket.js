import React from 'react'
import bstyles from '..//styles/blog.module.css'
import Footer from '../comps/footer'
import Image from 'next/image'

function Mangomarket() {
  return (
    <div className={bstyles.bodyy}>
      <article className={bstyles.article}>
        <div className={bstyles.article__body}>
          <section className={bstyles.header}>
            <div>
              <span className={bstyles.header__cat}>Crime</span>
              <h1 className={bstyles.header__title}>Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h1>
            </div>
            <div className={bstyles.article__image}>
              <div className={bstyles.article__imagewrapper}>
                  <Image src="http://localhost:3000/mangomarket.svg" width={500} height={600} alt=""/>
              </div>
            </div>
          </section>

          <section className={bstyles.richtext}>
              <p>Avraham Eisenberg, the crypto investor whose <i>“highly profitable trading strategy”</i> drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.</p>
              <p>The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.</p>
              <p>Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.</p>
              <p>A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg “willfully and knowingly” manipulated the sale of a commodity – namely futures contracts on Mango Markets.</p>
              <p><i>“Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”</i></p>
          
          </section>
      </div>

    </article>
    <Footer/>
    </div>
  )
}

export default Mangomarket