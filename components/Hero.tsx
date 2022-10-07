import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { Links } from "../constants"
import { motion } from "framer-motion"

const loadVariants = {
	out: {
		y: 40,
	},
	in: {
		y: 0,
		transition: {
			duration: 0.8,
			delayChildren: 0.8,
			staggerChildren: 0.55,
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
		<div className='relative flex-grow flex items-center px-6 md:px-12'>
			<motion.div
				// variants={loadVariants}
				initial='out'
				animate='in'
				className='flex flex-col flex-grow'
			>
				<motion.div
					animate={{
						rotate: [0, -24, 0, -15, 0, -12],
						scale: [1.4, 1.0],
						transition: { duration: 0.8 },
					}}
					transition={{ duration: 0.8 }}
					className='text-flatpurple font-body font-medium text-2xl  -rotate-12 w-max'
				>
					Hello!
				</motion.div>
				<motion.div
					variants={elementVariants}
					className='relative mt-2 mb-4'
				>
					<div className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem]'>
						I am Ariel Okhtenberg
						<span className='text-flatpurple font-header text-[3.25rem] md:text-6xl lg:text-7xl cursor-pointer'>
							.
						</span>
					</div>
				</motion.div>
				<motion.div
					variants={elementVariants}
					className='text-lg md:text-xl text-flatgray inline-flex'
				>
					<motion.div
						initial='rest'
						whileHover='hover'
						animate='rest'
						className='relative w-max'
					>
						<span className='text-flatgray'>Web Developer</span>
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
						<span className='text-flatgray'>Graphic Designer</span>
						<motion.span
							variants={subtitleVariants}
							className='absolute bg-flatpurple/30 h-1 w-full left-0 bottom-0 -z-[1]'
						></motion.span>
					</motion.div>
				</motion.div>
				<motion.div
					variants={elementVariants}
					className='flex space-x-2 my-10'
				>
					<div className='flex-initial w-12 mt-1'>&#11834;</div>
					<div className='text-flatgray font-light leading-loose'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
				</motion.div>
				<motion.div
					variants={elementVariants}
					className='flex flex-col select-none'
				>
					<div className='mb-10 mt-4'>
						<a
							href=''
							className='bg-flatpurple px-8 py-5 rounded-3xl items-center w-max'
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
								target={item.target}
								href={item.href}
								className='bg-offwhite px-6 py-5 rounded-3xl items-center'
							>
								<span className='sr-only'>{item.name}</span>
								<item.icon className='w-6' aria-hidden='true' />
							</motion.a>
						))}
					</div>
				</motion.div>
			</motion.div>
			<div className='absolute bottom-[8.5rem] -right-4 w-max rotate-90 text-flatgray font-light inline-flex md:bottom-40 md:right-12 select-none text-sm'>
				Scroll Down <ArrowRightIcon className='ml-4 w-4' />
			</div>
		</div>
	)
}

export default Hero
