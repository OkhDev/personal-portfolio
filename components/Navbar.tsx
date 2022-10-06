import React from "react"
import { useState } from "react"
import {
	Bars3BottomRightIcon,
	XMarkIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline"
import { NavLinks } from "../constants"
import { motion } from "framer-motion"

const underlineHover = {
	rest: {
		width: 0,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		width: "100%",
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
}

function Navbar() {
	const [toggle, setToggle] = useState<Boolean>(false)

	return (
		<nav className='sticky top-0 left-0 right-0 flex items-center justify-between w-full px-6 md:px-12 py-6 mx-auto tracking-wide select-none z-20 bg-white'>
			<div className='text-3xl cursor-pointer font-header'>
				Okhtenberg
				<span className='text-flatpurple font-extrabold text-4xl ml-0.5'>
					.
				</span>
			</div>
			<div className='align-middle hidden space-x-10 cursor-pointer md:inline-flex'>
				{NavLinks.map((nav) => (
					<motion.div
						initial='rest'
						whileHover='hover'
						animate='rest'
						className='relative w-max'
					>
						<p key={nav.id}>{nav.title}</p>
						<motion.span
							variants={underlineHover}
							className='absolute bg-flatpurple/30 h-1 left-0 -bottom-1 -z-[1]'
						></motion.span>
					</motion.div>
				))}
			</div>
			<div className='flex justify-end flex-1 md:hidden'>
				<div
					className='w-8 object-contain cursor-pointer'
					onClick={() => setToggle((prev) => !prev)}
				>
					{toggle ? (
						<XMarkIcon className='stroke-2' />
					) : (
						<Bars3BottomRightIcon className='stroke-2' />
					)}
				</div>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-[5.5rem] right-0 py-12 w-full z-10 bg-white drop-shadow-lg`}
				>
					<ul className='flex flex-col items-center justify-end flex-1 list-none select-none'>
						{NavLinks.map((nav) => (
							<li key={nav.id} className='cursor-pointer pb-10'>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
						<li>
							<a href='/' className='cursor-pointer'>
								Let's Talk
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='relative'>
				<motion.a
					whileHover={{ borderColor: "#8873EF", scale: 1.05 }}
					className='hidden md:inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl border-2 border-offwhite items-center'
				>
					{/* mt-[0.15rem] */}
					<span className='mt-[0.15rem]'>Let's Talk</span>
					<PaperAirplaneIcon className='ml-3 w-[1.25rem] stroke-[2px]' />
				</motion.a>
			</div>
		</nav>
	)
}

export default Navbar
