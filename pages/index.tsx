import type { NextPage } from "next"
import { useEffect } from "react"

import Head from "next/head"
import About from "../components/About"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Waves from "../components/Waves"

import wavesHeader from "/public/images/waves1.svg"
import wavesSkills from "/public/images/waves2.svg"

const Home: NextPage = () => {
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--vh",
			window.innerHeight * 0.01 + "px"
		)
	})

	return (
		<>
			<Head>
				<title>Okhtenberg Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<Hero />

			<Waves image={wavesHeader} position='bottom' />

			<About />

			<Waves image={wavesSkills} position='top' />
		</>
	)
}

export default Home
