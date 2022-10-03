import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Okhtenberg Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='flex flex-col w-full mx-auto max-w-7xl min-h-screen'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Home
