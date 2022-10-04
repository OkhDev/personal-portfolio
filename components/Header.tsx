import React from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	return (
		<>
			<div className='flex flex-col h-screen inset-0'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
