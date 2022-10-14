import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

const Home: NextPage = () => {
  const fontArray = [
    'CoreSans-Light',
    'CoreSans-Regular',
    'CoreSans-Medium',
    'CoreSans-Bold',
    'CoreSans-ExtraBold',
    'GalanoGrotesque-Bold',
  ]

  return (
    <>
      <Head>
        <title>Okhtenberg Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {fontArray.map((font, i) => (
          <link
            key={i}
            rel="preload"
            href={`/fonts/${font}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </Head>

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Contact />

      <Footer />
    </>
  )
}

export default Home
