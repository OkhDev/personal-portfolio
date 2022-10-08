import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useLockedBody } from "usehooks-ts"

import { NavLinks } from "../constants"

const navTitleVariant = {
	close: {
		transition: {
			duration: 0.8,
		},
	},
	open: {
		color: "#fff",
		transition: {
			duration: 0.8,
		},
	},
}

const underlineVariant = {
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

const appearMenuVariant = {
	close: {
		x: "100vw",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeIn",
		},
	},
	open: {
		x: 0,
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeIn",
		},
	},
}

const menuIconVariant = {
	close: {
		scale: 1.6,
		x: -4,
		rotate: 0,
		stroke: "#8873EF",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeIn",
		},
	},
	open: {
		scale: 1.6,
		x: -4,
		rotate: 180,
		stroke: "#fff",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeIn",
		},
	},
}

function Navbar() {
	const [isOpen, setOpen] = useState<Boolean>(false)
	const [locked, setLocked] = useLockedBody(false)

	const handleResize = () => {
		if (window.innerWidth <= 768) {
			setOpen(false)
			setLocked(false)
		}
	}

	const triggerToggle = () => {
		setOpen((prev) => !prev)
		setLocked(!locked)
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	return (
		<nav className='top-0 left-0 right-0 z-50 px-6 py-6 mx-auto tracking-wide bg-white select-none overflow-x-clip md:px-12'>
			<div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
				{/* LEFT OF NAVBAR */}
				<div className='cursor-pointer z-[2]'>
					<motion.span
						variants={navTitleVariant}
						initial={"close"}
						animate={isOpen ? "open" : "close"}
						className='text-3xl font-header'
					>
						Okhtenberg
					</motion.span>
					<motion.span
						variants={navTitleVariant}
						initial={"close"}
						animate={isOpen ? "open" : "close"}
						className='text-3xl text-flatpurple font-header'
					>
						.
					</motion.span>
				</div>

				{/* MIDDLE OF NAVBAR */}
				<div className='hidden space-x-10 align-middle cursor-pointer md:inline-flex'>
					{NavLinks.map((nav) => (
						<motion.a
							initial='rest'
							whileHover='hover'
							animate='rest'
							className='relative w-max'
							key={nav.id}
						>
							{nav.title}
							<motion.span
								variants={underlineVariant}
								className='absolute bg-flatpurple/30 h-1 left-0 -bottom-1 -z-[1]'
							></motion.span>
						</motion.a>
					))}
				</div>

				{/* NAVBAR PAGES */}
				<div className='flex justify-end flex-1 md:hidden'>
					<div
						className='w-max object-contain select-none z-[2]'
						onClick={() => triggerToggle()}
					>
						{/* MOBILE HAMBURGER MENU ICON */}
						<motion.svg
							variants={menuIconVariant}
							initial={"close"}
							animate={isOpen ? "open" : "close"}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							width='24'
							height='24'
							stroke-width='2'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</motion.svg>
					</div>

					{/* MOBILE HAMBURGER MENU */}
					<AnimatePresence>
						{isOpen && (
							<motion.div
								variants={appearMenuVariant}
								initial={"close"}
								animate={isOpen ? "open" : "close"}
								exit={"close"}
								className='flex absolute top-0 left-0 w-screen z-[1] full-screen bg-gradient-to-t from-flatpurple to-lightpurple'
							>
								<div className='m-auto'>
									<ul className='flex flex-col items-center justify-end flex-1 gap-12 list-none select-none'>
										{NavLinks.map((nav) => (
											<li
												key={nav.id}
												className='text-white cursor-pointer'
											>
												<a
													href={`#${nav.id}`}
													className='text-2xl font-medium'
												>
													{nav.title}
												</a>
											</li>
										))}
										<li>
											<motion.a
												href=''
												animate={{
													rotate: [
														0, 4, -4, 4, -4, 0,
													],
												}}
												transition={{
													delay: 1,
													repeat: Infinity,
													repeatDelay: 2,
												}}
												className='inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl bg-white items-center'
											>
												<span className='mt-[0.15rem] text-flatpurple text-2xl font-medium'>
													Let's Talk
												</span>
												<PaperAirplaneIcon className='stroke-flatpurple ml-3 stroke-[2.5px] w-6' />
											</motion.a>
										</li>
									</ul>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>

				{/* RIGHT OF NAVBAR */}
				<div className='relative'>
					<motion.a
						whileHover={{ borderColor: "#8873EF", x: 8 }}
						href=''
						className='hidden md:inline-flex font-medium cursor-pointer px-6 py-3.5 rounded-3xl border-2 border-lightpurple items-center'
					>
						<span className='mt-[0.15rem]'>Let's Talk</span>
						<PaperAirplaneIcon className='ml-3 w-[1.25rem] stroke-[2px]' />
					</motion.a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
