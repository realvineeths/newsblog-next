import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Card from '../comps/card'
import Footer from '../comps/footer'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home({newsinfo}) {

  return (
    <>
      <Head>
        <title>HourlyNews</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar navdata='hello'/>
      <div className={styles.gallery}>
        {
          newsinfo.map((data)=>{
            return <Link href={`/${data.id}`} key={data.id}><Card imge={data.image} title={data.title} tag={data.tag} smalldes={data.smalldes} user={data.user} timeline={data.timeline} key={data.id}/></Link>
          })
        }
      </div>

      <Footer footdata='hello'/>

    </>
  )
}

export async function getStaticProps(){

  // const res=await fetch('http://localhost:3000/datafolder/newsinfo.json');
  // const data=await res.json();
  const arrjson=[
      {
        "id":"paypal",
        "image":"/paypal.svg",
        "title":"PayPal enables transfer of digital currencies to external wallets",
        "tag":"Technology",
        "smalldes":"The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.",
        "user":"Eyup Ucmaz",
        "timeline":"Yesterday"
    }
    ,
    {
        "id":"parliament",
        "image":"/parliament.svg",
        "title":"Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget",
        "tag":"Politics",
        "smalldes":"Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.",
        "user":"David Rocco",
        "timeline":"2hrs ago"
    },
    {
        "id":"microstrategy",
        "image":"/microstrategy.svg",
        "title":"Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC",
        "tag":"Technology",
        "smalldes":"Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. ",
        "user":"Rick Taylor",
        "timeline":"1hr ago "
    },
    {
        "id":"miners",
        "image":"/miners.svg",
        "title":"Bitcoin Miners Revenue Hits $9.55 Billion in 2022",
        "tag":"Technology",
        "smalldes":"According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.",
        "user":"Mellisa Hathway",
        "timeline":"2 Days ago"
    },
    {
        "id":"mangomarket",
        "image":"/mangomarket.svg",
        "title":"Mango Markets Exploiter Eisenberg Arrested in Puerto Rico",
        "tag":"Crime",
        "smalldes":"The investor drained $110 million in cryptocurrencies from the platform.",
        "user":"Jake Peralta",
        "timeline":"5hrs ago"
    }
  ]

  return {
    props:{newsinfo: arrjson}
  }
}