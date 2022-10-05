import React from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"

import useWindowDimensions from "../hooks/useWindowDimensions"

const Header = () => {
	const { height } = useWindowDimensions()

	return (
		<>
			<div className={`flex flex-col h-[${height}px]`}>
				<Navbar />
				<Hero />
			</div>
		</>
	)
}

export default Header
