import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* header*/}
      <Header />
      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}

        <Banner />
        {/* Product Feed */}

      </main>
    </div>
  )
}

export default Home
