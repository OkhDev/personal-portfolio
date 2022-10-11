import type { NextPage } from "next"

import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

import Waves from "../components/Waves"
import wavesHeader from "/public/images/waves1.svg"
import wavesSkills from "/public/images/waves2.svg"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Okhtenberg Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='preload'
					href='/fonts/CoreSans-Light.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/CoreSans-Regular.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/CoreSans-Medium.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/CoreSans-Bold.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/CoreSans-ExtraBold.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link
					rel='preload'
					href='/fonts/GalanoGrotesque-Bold.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
			</Head>

			<Navbar />

			<Hero />

			<Waves image={wavesHeader} position='bottom' />

			<Skills />

			<Waves image={wavesSkills} position='top' marginBottom={5} />

			{/* <Projects /> */}
		</>
	)
}

export default Home
