import React from "react"
import { useState } from "react"
import {
	Bars3BottomRightIcon,
	XMarkIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline"
import { NavLinks } from "../constants"
import { motion, SVGMotionProps } from "framer-motion"

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
				<span className='text-flatpurple font-extrabold text-4xl'>
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
					className='w-8 object-contain focus:select-none select-none'
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
					} p-6 absolute top-[5.5rem] right-0 w-full z-10 bg-flatpurple drop-shadow-xl h-[calc(100vh_-_5.5rem)]`}
				>
					<div className='m-auto'>
						<ul className='flex flex-col items-center justify-end flex-1 list-none select-none space-y-12'>
							{NavLinks.map((nav) => (
								<li
									key={nav.id}
									className='text-white cursor-pointer'
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
							<li>
								<a
									href=''
									className='inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl border-2 border-white items-center'
								>
									<span className='mt-[0.15rem] text-white'>
										Let's Talk
									</span>
									<PaperAirplaneIcon className='stroke-white ml-3 w-[1.25rem] stroke-[2px]' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='relative'>
				<motion.a
					whileHover={{ borderColor: "#8873EF", scale: 1.05 }}
					href=''
					className='hidden md:inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl border-2 border-offwhite items-center'
				>
					<span className='mt-[0.15rem]'>Let's Talk</span>
					<PaperAirplaneIcon className='ml-3 w-[1.25rem] stroke-[2px]' />
				</motion.a>
			</div>
		</nav>
	)
}

export default Navbar
