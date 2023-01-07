import React from 'react'
import bstyles from '..//styles/blog.module.css'
import Footer from '../comps/footer'
import Image from 'next/image'

function Microstrategy() {
  return (
    <div className={bstyles.bodyy}>
      <article className={bstyles.article}>
        <div className={bstyles.article__body}>
          <section className={bstyles.header}>
            <div>
              <span className={bstyles.header__cat}>Technology</span>
              <h1 className={bstyles.header__title}>Microstrategy Buys More Bitcoin — Company&apos;s Crypto Holdings Grow to 132,500 BTC</h1>
            </div>
            <div className={bstyles.article__image}>
              <div className={bstyles.article__imagewrapper}>
                  <Image src="http://localhost:3000/microstrategy.svg" width={500} height={600} alt=""/>
              </div>
            </div>
          </section>

          <section className={bstyles.richtext}>
              <p>Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world&apos;s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor.</p>

              <h2>Microstrategy Acquires More Bitcoin</h2>

              <p>Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company&apos;s founder and executive chairman, tweeted Wednesday:</p>

              <p>Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.</p>
              
              <p>In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.</p>
              <p>The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. “Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available The subsidiary bought approximately 2,395 BTC at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.</p>
              <p>under the federal income tax laws currently in effect, which may generate a tax benefit,” the SEC filing describes.</p>
              <p><i>Saylor said in an interview last week:</i></p>

              <p>The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … there is one crypto asset that&apos;s a digital commodity … Bitcoin is that commodity.</p>
              <p>The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity.
              Saylor previously explained that Microstrategy is investing in BTC “for the long term.” He added: “Our strategy is to buy bitcoin and hold the bitcoin, so there&apos;s no price target … I expect bitcoin is going to go into the millions. So, we&apos;re very patient. We think it&apos;s the future of money.”
              </p>
         </section>
      </div>

    </article>
    <Footer/>
    </div>
  )
}

export default Microstrategy