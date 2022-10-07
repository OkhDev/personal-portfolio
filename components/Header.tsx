import { useEffect } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--vh",
			window.innerHeight * 0.01 + "px"
		)
	})
	return (
		<>
			<div className='flex flex-col h-screen'>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
