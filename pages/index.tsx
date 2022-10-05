import type { NextPage } from "next"
import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Okhtenberg Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
		</>
	)
}

export default Home
