import React from "react"
import { useState } from "react"
import {
	ArrowUpRightIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline"
import { NavLinks } from "../constants"

function Navbar() {
	const [toggle, setToggle] = useState<Boolean>(false)

	return (
		<nav className='flex items-center justify-between w-full px-6 md:px-12 py-8 mx-auto tracking-wide select-none'>
			<div className='text-3xl cursor-pointer font-extrabold font-header'>
				Okhtenberg
				<span className='text-flatpurple text-4xl ml-0.5'>.</span>
			</div>
			<div className='align-middle hidden space-x-10 cursor-pointer md:inline-flex'>
				{NavLinks.map((nav) => (
					<h3 key={nav.id}>{nav.title}</h3>
				))}
			</div>
			<div className='flex justify-end flex-1 md:hidden'>
				<div
					className='w-[2.5rem] h-[2.5rem] object-contain cursor-pointer'
					onClick={() => setToggle((prev) => !prev)}
				>
					{toggle ? <XMarkIcon /> : <Bars3BottomRightIcon />}
				</div>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-[6.5rem] right-0 py-20 w-full z-20 bg-offwhite`}
				>
					<ul className='flex flex-col items-center justify-end flex-1 list-none select-none'>
						{NavLinks.map((nav, index) => (
							<li key={nav.id} className='cursor-pointer pb-10'>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
						<li>
							<a href='/' className='cursor-pointer'>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<a className='hidden md:inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl bg-offwhite items-center'>
					<span className='mt-[0.15rem]'>Resume</span>
					<span className='w-[1.25rem] ml-3'>
						<ArrowUpRightIcon className='stroke-[2px]' />
					</span>
				</a>
			</div>
		</nav>
	)
}

export default Navbar
