import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

import {
	ContactTitle,
	ContactDescription,
	ContactEmail,
	ContactNote,
} from "../../constants/index"

const loadContactVariant = {
	in: {
		y: 0,
		transition: {
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
			duration: 0.4,
		},
	},
}

function Contact({ ref }: any): JSX.Element {
	const refTitle = useRef(null)

	const isInViewTitle = useInView(refTitle, {
		margin: "0px 0px -200px 0px",
		once: true,
	})

	return (
		<section
			ref={ref}
			className='relative flex flex-col pt-4 bg-flatpurple md:pt-6'
		>
			<motion.div
				variants={loadContactVariant}
				initial={!isInViewTitle && "out"}
				animate={isInViewTitle ? "in" : "out"}
				className='relative flex flex-col items-center w-full px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl'
			>
				<motion.h1
					ref={refTitle}
					variants={elementVariant}
					className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8'
				>
					{ContactTitle}
				</motion.h1>
				<motion.div
					variants={elementVariant}
					className='flex mb-8 space-x-4 md:mb-8'
				>
					<div className='flex-initial w-12 mt-1 text-white'>&#11834;</div>
					<p className='font-light leading-loose text-white'>
						{ContactDescription}
					</p>
				</motion.div>
				<motion.div
					variants={elementVariant}
					className='flex flex-col m-auto text-center w-max md:m-0'
				>
					<motion.a
						whileHover={{ scale: 1.05 }}
						href={ContactEmail.href}
						className='inline-flex items-center px-5 py-3 mb-4 font-bold bg-white rounded-md text-flatpurple w-max drop-shadow-sm'
					>
						<EnvelopeIcon className='w-6 mr-3 stroke-2 stroke-flatpurple' />
						{ContactEmail.email}
					</motion.a>
					<small className='text-offwhite'>
						<span className='font-bold text-offwhite'>
							{ContactNote[0]}&nbsp;
						</span>
						{ContactNote[1]}
					</small>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Contact
