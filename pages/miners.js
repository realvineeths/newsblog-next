import React from 'react'
import bstyles from '..//styles/blog.module.css'
import Footer from '../comps/footer'
import Image from 'next/image'

function Miners() {
  return (
    <div className={bstyles.bodyy}>
      <article className={bstyles.article}>
        <div className={bstyles.article__body}>
          <section className={bstyles.header}>
            <div>
              <span className={bstyles.header__cat}>Technology</span>
              <h1 className={bstyles.header__title}>Bitcoin Miners Revenue Hits $9.55 Billion in 2022</h1>
            </div>

            <div className={bstyles.article__image}>
              <div className={bstyles.article__imagewrapper}>
                  <Image src="http://localhost:3000/miners.svg" width={500} height={600} alt=""/>
              </div>
            </div>
          </section>

          <section className={bstyles.richtext}>
              <p>2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.</p>

              <p>
                Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.
              </p>

              <p>The situation was aggravated when cryptocurrency prices, including Bitcoin&apos;s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miner&apos;s <strong>revenue hit $9.55 billion in 2022.</strong></p>

              <h2>Bitcoin miner&apos;s revenue dropped in 2022</h2>

              <p>Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.</p>
              <p>Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase.</p>

         </section>
      </div>

     </article>
     <Footer/>
    </div>
  )
}

export default Miners