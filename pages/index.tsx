import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

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
