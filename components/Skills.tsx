import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { default as id } from "uuid-random"

import { Skill, Resume } from "../constants"

function Skills() {
	// const ref = useRef(null)
	// const isInView = useInView(ref)

	// useEffect(() => {
	// 	console.log("Element is in view: ", isInView)
	// }, [isInView])

	return (
		<section className='relative flex flex-grow bg-flatpurple'>
			<div className='relative flex flex-col flex-1 h-full px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl'>
				{/* TITLE */}
				<div className='flex flex-col items-start gap-8 md:gap-16 lg:gap-24 md:flex-row'>
					{/* DESCRIPTION */}
					<div className='md:basis-1/2'>
						<h1 className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8 w-full'>
							Skills &amp; Experience
						</h1>
						<div className='flex mb-4 space-x-4 md:mb-8'>
							<div className='flex-initial w-12 mt-1 text-white'>
								&#11834;
							</div>
							<p className='font-light leading-loose text-white'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Sit
								amet dictum sit amet justo donec enim. Erat
								pellentesque adipiscing commodo elit.
							</p>
						</div>
						<div className='py-8'>
							<h3 className='mb-8 text-4xl text-white font-header'>
								Skills
							</h3>
							{/* SKILLS BLOCK */}
							<ul className='flex flex-wrap gap-3 md:gap-5'>
								{Skill.map((item) => (
									<li
										key={id()}
										className='inline-flex items-center px-4 py-3 rounded-xl bg-lightpurple w-max drop-shadow-sm'
									>
										{/* <item.icon /> */}
										<span className='mt-1 font-medium text-offwhite'>
											{item.skill}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='md:basis-1/2'>
						<h2 className='mb-8 text-4xl text-white font-header'>
							Experience
						</h2>
						<div className='space-y-10'>
							{Resume.map((resume) => (
								<div key={id()} className='leading-loose'>
									<hr className='border-white border-[1px] rounded-full mb-4 w-full' />
									<div className='flex flex-col gap-3 md:flex-row md:gap-6'>
										<div className='w-full text-white md:basis-1/3'>
											{resume.date}
										</div>
										<div className='md:basis-2/3'>
											<h3 className='mb-4 text-2xl font-bold text-white'>
												{resume.position}
											</h3>
											<p className='inline-flex text-lg text-white/70'>
												{resume.company}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
