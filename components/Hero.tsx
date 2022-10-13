import { useEffect } from "react"
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import {
	SocialLinks,
	Hello,
	NameTitle,
	Profession,
	TitleDescription,
	PortfolioButton,
	ScrollDown,
} from "../constants"
import { motion } from "framer-motion"

const loadHeroVariant = {
	in: {
		y: 0,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.2,
		},
	},
}

const elementVariant = {
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

const subtitleVariant = {
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
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--vh",
			window.innerHeight * 0.01 + "px"
		)
	})
	return (
		<div className='relative flex flex-grow bg-white'>
			<motion.div
				variants={loadHeroVariant}
				initial='out'
				animate='in'
				className='relative flex flex-col justify-center w-full px-6 mx-auto hero md:px-12 max-w-7xl'
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
					{Hello}
				</motion.p>

				{/* ARIEL OKHTENBERG */}
				<motion.div
					variants={elementVariant}
					className='relative mt-2 mb-4'
				>
					<h1 className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem]'>
						{NameTitle}
						<span className='text-flatpurple font-header text-[3.25rem] md:text-6xl lg:text-7xl cursor-pointer'>
							.
						</span>
					</h1>
				</motion.div>

				{/* WEB DEVELOPER & GRAPHIC DESIGNER */}
				<motion.div
					variants={elementVariant}
					className='inline-flex text-lg md:text-xl text-flatgray'
				>
					{Profession.map((profession, i) => (
						<span className='inline-flex' key={i}>
							<motion.div
								initial='rest'
								whileHover='hover'
								animate='rest'
								className='relative w-max z-[2]'
							>
								<h3 className='text-flatgray'>{profession}</h3>
								<motion.span
									variants={subtitleVariant}
									className='absolute bottom-0 left-0 w-full h-1 bg-flatpurple/30 -z-[1]'
								></motion.span>
							</motion.div>
							{i === 0 && <span>&nbsp;&amp;&nbsp;</span>}
						</span>
					))}
				</motion.div>

				{/* PERSONAL DESCRIPTION */}
				<motion.div
					variants={elementVariant}
					className='flex my-10 space-x-4'
				>
					<div className='flex-initial w-12 mt-1'>&#11834;</div>
					<p className='font-light leading-loose text-flatgray'>
						{TitleDescription}
					</p>
				</motion.div>

				{/* HERO BUTTONS/LINKS */}
				<motion.div
					variants={elementVariant}
					className='flex flex-col select-none'
				>
					<div className='mt-4 mb-10'>
						<a
							href=''
							className='items-center px-8 py-5 bg-flatpurple rounded-3xl w-max drop-shadow-sm'
						>
							<span className='mt-[0.2rem] text-white inline-flex'>
								{PortfolioButton.title}
								<ArrowUpRightIcon className='stroke-white stroke-[2px] w-5 ml-2' />
							</span>
						</a>
					</div>
					<div className='z-10 inline-flex space-x-4'>
						{SocialLinks.map((item, i) => (
							<motion.a
								whileHover={{
									y: -6,
									scale: 1.05,
								}}
								key={i}
								target='_blank'
								href={item.href}
								className='items-center px-6 py-5 bg-offwhite rounded-3xl drop-shadow-sm'
							>
								<span className='sr-only'>{item.name}</span>
								<span className='fill-flatblack'>
									<item.icon aria-hidden='true' />
								</span>
							</motion.a>
						))}
					</div>
					{/* SCROLL DOWN MESSAGE */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2.4, duration: 1 }}
						className='absolute inline-flex text-sm font-light rotate-90 select-none bottom-32 md:bottom-64 -right-4 w-max text-flatgray/60 md:right-12'
					>
						{ScrollDown}{" "}
						<ArrowRightIcon className='w-4 ml-4 stroke-flatgray/60' />
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Hero
