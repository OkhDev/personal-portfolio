import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

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
        <title>Ariel Okhtenberg</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keyword"
          content="ariel, okhtenberg, portfolio, front-end, web, developer, javascript, react, nextjs, flat, modern, simple"
        />
        <meta
          name="description"
          content="Okhtenberg's personal front-end web portfolio showcasing the projects that Ariel has developed."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
