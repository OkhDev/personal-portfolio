import React from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	return (
		<>
			<div className='flex flex-col absoute h-screen inset-0 max-w-7xl'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
