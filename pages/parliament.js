import React from 'react'
import bstyles from '..//styles/blog.module.css'
import Footer from '../comps/footer'
import Image from 'next/image'

function Parliament() {
  return (
    <div >
      <article className={bstyles.article}>
        <div className={bstyles.article__body}>
          <section className={bstyles.header}>
            <div>
              <span className={bstyles.header__cat}>Politics</span>
              <h1 className={bstyles.header__title}>Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget</h1>
            </div>

            <div className={bstyles.article__image}>
              <div className={bstyles.article__imagewrapper}>
                  <Image src="/parliament.svg" width={500} height={600} alt=""/>
              </div>
            </div>
          </section>

          <section className={bstyles.richtext}>
              <p>Prime Minister Giorgia Meloni&apos;s new bill also includes an incentive for those declaring crypto for tax purposes.</p>

              <p>Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday.
              Italian Prime Minister Giorgia Meloni&apos;s 2023 expansionary budget which was completed in a rush before the end of the year – features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters reported.
              </p>

              <p>In Italy, where crypto remains largely unregulated, the 387-page budget legitimizes crypto assets by defining them as &quot;a digital representation of value or rights, which can be transferred and stored electronically, using the technology of distributed ledger or similar technology.&quot;</p>

              <p>Italy&apos;s (and most recently Portugal&apos;s) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union&apos;s Markets in Crypto Assets (MiCA) regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc.
              The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a &quot;substitute income tax&quot; for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase.
              </p>
          </section>
      </div>


    </article>
    <Footer/>
    </div>
  )
}

export default Parliament