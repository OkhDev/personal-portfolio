import React from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	return (
		<>
			<div className='flex flex-col min-h-screen'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
