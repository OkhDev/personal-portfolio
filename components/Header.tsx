import { useEffect } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	return (
		<>
			<div className='flex flex-col h-screen overflow-x-hidden'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
