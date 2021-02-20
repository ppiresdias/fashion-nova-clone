import Head from 'next/head'

import NewCollection from '../components/newCollection'
import FeaturedProducts from '../components/featuredProducts'
import ForHimHer from '../components/forhimher'
import LatestPosts from '../components/latestPosts'
import InstagramPosts from '../components/instagramPosts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fashion Nova Clone Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
      </Head>
      <NewCollection />
      <FeaturedProducts />
      <ForHimHer />
      <LatestPosts />
      <InstagramPosts />
    </div>
  )
}
