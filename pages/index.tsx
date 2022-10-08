import type { NextPage } from "next"
import Head from "next/head"
import About from "../components/About"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import Hero from "../components/Hero"
import Waves from "../components/Waves"

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

			<Waves />

			<About />
		</>
	)
}

export default Home
