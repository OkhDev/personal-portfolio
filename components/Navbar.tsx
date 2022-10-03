import React from "react"
import { useState } from "react"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLinks } from "../constants"

function Navbar() {
	const [toggle, setToggle] = useState<Boolean>(false)

	return (
		<nav className='flex items-center justify-between w-full px-12 py-8 mx-auto tracking-wide max-w-7xl'>
			<div className='text-4xl font-extrabold cursor-pointer'>
				short
				<span className='text-transparent bg-gradient-to-br from-shortener-200 to-shortener-300 bg-clip-text'>
					linx
				</span>
			</div>
			<div className='items-center hidden space-x-6 font-medium cursor-pointer md:inline-flex text-md'>
				<h3>Home</h3>
				<h3>About</h3>
				<button className='px-4 py-2 text-white rounded-full bg-gradient-to-br from-shortener-200 to-shortener-300'>
					More Apps
				</button>
			</div>
			<div className='flex items-center justify-end flex-1 md:hidden'>
				<div
					className='w-[2.5rem] h-[2.5rem] object-contain cursor-pointer'
					onClick={() => setToggle((prev) => !prev)}
				>
					{toggle ? <XMarkIcon /> : <Bars3BottomRightIcon />}
				</div>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg z-20`}
				>
					<ul className='flex flex-col items-center justify-end flex-1 list-none select-none'>
						{NavLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-sans font-normal cursor-pointer text-[16px] text-slate-600 ${
									index === NavLinks.length - 1
										? "mr-0"
										: "mb-4"
								}`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
