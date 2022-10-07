import { useState, useEffect } from "react"
import {
	Bars3BottomRightIcon,
	XMarkIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline"
import { NavLinks } from "../constants"
import { motion } from "framer-motion"

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
		x: "100%",
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

const barsIconVariant = {
	close: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	open: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
}

const xMarkIconVariant = {
	close: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
	open: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
}

function Navbar() {
	const [toggle, setToggle] = useState<Boolean>(false)

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setToggle(false)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	})

	return (
		<nav className='sticky top-0 left-0 right-0 flex items-center justify-between w-full px-6 md:px-12 py-6 mx-auto tracking-wide select-none z-20 bg-white'>
			{/* LEFT OF NAVBAR */}
			<div className='cursor-pointer z-[2]'>
				<motion.span
					// animate={toggle ? "color:'#fff'" : "color:'#0e0c0b'"}
					transition={{ duration: 0.4 }}
					className={`${toggle && "text-white"} text-3xl font-header`}
				>
					Okhtenberg
				</motion.span>
				<motion.span
					animate={toggle ? "color:'#fff'" : "color:'#8873EF'"}
					transition={{ duration: 0.4 }}
					className={`${
						toggle && "text-white"
					} text-flatpurple font-header text-3xl`}
				>
					.
				</motion.span>
			</div>
			{/* MIDDLE OF NAVBAR */}
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
							variants={underlineVariant}
							className='absolute bg-flatpurple/30 h-1 left-0 -bottom-1 -z-[1]'
						></motion.span>
					</motion.div>
				))}
			</div>
			{/* MOBILE MENU */}
			<div className='flex justify-end flex-1 md:hidden'>
				<div
					className='w-8 object-contain select-none z-[2]'
					onClick={() => setToggle((prev) => !prev)}
				>
					{/* MOBILE MENU ICONS */}
					<motion.span
						className={`${!toggle && "hidden"}`}
						variants={xMarkIconVariant}
						animate={toggle ? "open" : "close"}
					>
						<XMarkIcon className='stroke-2 stroke-white' />
					</motion.span>
					<motion.span
						className={`${toggle && "hidden"}`}
						variants={barsIconVariant}
						animate={toggle ? "open" : "close"}
					>
						<Bars3BottomRightIcon className='stroke-2' />
					</motion.span>
				</div>
				{/* NAVIGATION ITEMS */}
				{/* ! FIX MOBILE MENU */}

				<motion.div
					variants={appearMenuVariant}
					initial={"close"}
					animate={toggle ? "open" : "close"}
					className={`flex absolute top-0 right-0 w-full z-[1] h-screen bg-flatpurple`}
				>
					<div className='m-auto'>
						<ul className='flex flex-col items-center justify-end flex-1 list-none select-none space-y-12'>
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
										rotate: [0, 5, -5, 5, -5, 0],
									}}
									transition={{
										repeat: Infinity,
										repeatDelay: 1,
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
			</div>
			{/* RIGHT OF NAVBAR */}
			<div className='relative'>
				<motion.a
					whileHover={{ borderColor: "#8873EF", x: 8 }}
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
