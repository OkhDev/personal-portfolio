import React from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	window.addEventListener("resize", () => {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty("--vh", `${vh}px`)
	})

	return (
		<>
			<div className='flex flex-col screen-height'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
