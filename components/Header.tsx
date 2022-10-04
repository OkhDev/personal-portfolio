import React from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	return (
		<>
			<div className='flex-1 flex flex-col h-screen'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
