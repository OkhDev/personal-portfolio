import React from "react"
import { useState } from "react"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { NavLinks } from "../constants"

function Navbar() {
	const [toggle, setToggle] = useState<Boolean>(false)

	return (
		<nav className='flex items-center justify-between w-full px-12 py-8 mx-auto tracking-wide max-w-7xl z-50 select-none'>
			<div className='text-2xl font-bold cursor-pointer uppercase '>
				okhdev
			</div>
			<div className='items-center hidden space-x-10 cursor-pointer md:inline-flex text-md'>
				{NavLinks.map((nav) => (
					<h3 key={nav.id}>{nav.title}</h3>
				))}
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
								className={`font-normal cursor-pointer text-[16px] text-slate-600 ${
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
			<div>
				<a className='text-medium font-bold cursor-pointer'>
					Get In Touch
				</a>
			</div>
		</nav>
	)
}

export default Navbar
