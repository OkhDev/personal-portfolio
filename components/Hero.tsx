import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { Links } from "../constants"
import { motion } from "framer-motion"

const loadHeroVariants = {
	in: {
		y: 0,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.2,
		},
	},
}

const elementVariants = {
	out: {
		y: 40,
		opacity: 0,
	},
	in: {
		y: 0,
		opacity: "100%",
		transition: {
			duration: 1,
		},
	},
}

const subtitleVariants = {
	rest: {
		height: "0.25rem",
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		height: "2rem",
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
}

const Hero = () => {
	return (
		<div className='relative z-10 flex flex-1 h-screen max-h-screen -mt-3'>
			<motion.div
				variants={loadHeroVariants}
				initial='out'
				animate='in'
				className='relative flex flex-col flex-1 px-6 m-auto md:px-12 max-w-7xl'
			>
				{/* HELLO MESSAGE */}
				<motion.p
					animate={{
						rotate: [0, -24, 0, -15, 0, -12],
						scale: [1.4, 1.0],
						transition: { duration: 1 },
					}}
					transition={{ duration: 0.8 }}
					className='text-2xl font-medium text-flatpurple font-body -rotate-12 w-max'
				>
					Hello!
				</motion.p>

				{/* I AM ARIEL OKHTENBERG */}
				<motion.div
					variants={elementVariants}
					className='relative mt-2 mb-4'
				>
					<h1 className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem]'>
						I am Ariel Okhtenberg
						<span className='text-flatpurple font-header text-[3.25rem] md:text-6xl lg:text-7xl cursor-pointer'>
							.
						</span>
					</h1>
				</motion.div>

				{/* WEB DEVELOPER & GRAPHIC DESIGNER */}
				<motion.div
					variants={elementVariants}
					className='inline-flex text-lg md:text-xl text-flatgray'
				>
					<motion.div
						initial='rest'
						whileHover='hover'
						animate='rest'
						className='relative w-max'
					>
						<h3 className='text-flatgray'>Web Developer</h3>
						<motion.span
							variants={subtitleVariants}
							className='absolute bg-flatpurple/30 h-1 w-full left-0 bottom-0 -z-[1]'
						></motion.span>
					</motion.div>
					&nbsp;&amp;&nbsp;
					<motion.div
						initial='rest'
						whileHover='hover'
						animate='rest'
						className='relative w-max'
					>
						<h3 className='text-flatgray'>Graphic Designer</h3>
						<motion.span
							variants={subtitleVariants}
							className='absolute bg-flatpurple/30 h-1 w-full left-0 bottom-0 -z-[1]'
						></motion.span>
					</motion.div>
				</motion.div>

				{/* PERSONAL DESCRIPTION */}
				<motion.div
					variants={elementVariants}
					className='flex my-10 space-x-2'
				>
					<div className='flex-initial w-12 mt-1'>&#11834;</div>
					<p className='font-light leading-loose text-flatgray'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</motion.div>

				{/* HERO BUTTONS/LINKS */}
				<motion.div
					variants={elementVariants}
					className='flex flex-col select-none'
				>
					<div className='mt-4 mb-10'>
						<a
							href=''
							className='items-center px-8 py-5 bg-flatpurple rounded-3xl w-max'
						>
							<span className='mt-[0.2rem] text-white inline-flex'>
								Portfolio
								<ArrowUpRightIcon className='stroke-white stroke-[2px] w-5 ml-2' />
							</span>
						</a>
					</div>
					<div className='inline-flex space-x-4'>
						{Links.map((item) => (
							<motion.a
								whileHover={{
									y: -6,
									scale: 1.05,
								}}
								key={item.name}
								target='_blank'
								href={item.href}
								className='items-center px-6 py-5 bg-offwhite rounded-3xl'
							>
								<span className='sr-only'>{item.name}</span>
								<item.icon aria-hidden='true' />
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* SCROLL DOWN MESSAGE */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2.4, duration: 1 }}
					className='absolute inline-flex text-sm font-light rotate-90 select-none bottom-12 -right-4 w-max text-flatgray/60 md:right-12'
				>
					Scroll Down{" "}
					<ArrowRightIcon className='w-4 ml-4 stroke-flatgray/60' />
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Hero
