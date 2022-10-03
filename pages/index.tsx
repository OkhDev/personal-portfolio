import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"

const Home: NextPage = () => {
	return (
		<div className='flex flex-col items-center justify-center py-2'>
			<Head>
				<title>Okhtenberg Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
		</div>
	)
}

export default Home
