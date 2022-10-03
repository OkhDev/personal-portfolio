import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center py-2'>
			<Head>
				<title>Okhtenberg Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
		</div>
	)
}

export default Home
