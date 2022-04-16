import Head from 'next/head'
import HomeScreen from '../screens/Home'

export default function Home() {
  return (
      <>
        <Head>
          <title>Hepsiburada</title>
          <meta name="description" content="Hepsiburada" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeScreen />
      </>
  )
}
