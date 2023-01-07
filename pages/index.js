import Head from 'next/head'
import Image from 'next/image'
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
        <title>News Daily</title>
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

  const res=await fetch('http://localhost:3000/newsinfo.json');
  const data=await res.json();
  // console.log(data);
  return {
    props:{newsinfo: data}
  }
}