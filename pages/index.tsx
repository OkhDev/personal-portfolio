import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import About from "../components/About"
import { useEffect } from "react"

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

			<Header />
			{/* <About /> */}
		</>
	)
}

export default Home
