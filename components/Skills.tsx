import { useRef } from "react"
import { default as id } from "uuid-random"
import { motion, useInView } from "framer-motion"

import { Skill, Resume } from "../constants"

const loadSkillsVariant = {
	in: {
		y: 0,
		transition: {
			delay: 0.4,
			staggerChildren: 0.4,
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
			duration: 0.6,
		},
	},
}

function Skills() {
	const refTitle = useRef(null)
	const refSkills = useRef(null)
	const refExperience = useRef(null)
	const isInViewTitle = useInView(refTitle, {
		margin: "0px 0px -250px 0px",
		once: true,
	})
	const isInViewSkills = useInView(refSkills, {
		margin: "0px 0px -250px 0px",
		once: true,
	})
	const isInViewExperience = useInView(refExperience, {
		margin: "0px 0px -250px 0px",
		once: true,
	})

	return (
		<section className='relative flex flex-grow bg-flatpurple'>
			<div className='relative flex flex-col flex-1 h-full px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl'>
				{/* TITLE */}
				<div className='flex flex-col items-start gap-8 md:gap-16 lg:gap-24 md:flex-row'>
					{/* DESCRIPTION */}
					<div className='md:basis-1/2'>
						<motion.div
							ref={refTitle}
							variants={loadSkillsVariant}
							initial={!isInViewTitle && "out"}
							animate={isInViewTitle ? "in" : "out"}
						>
							<motion.h1
								variants={elementVariant}
								className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-8 w-full'
							>
								Skills &amp; Experience
							</motion.h1>
							<motion.div
								variants={elementVariant}
								className='flex mb-4 space-x-4 md:mb-8'
							>
								<div className='flex-initial w-12 mt-1 text-white'>
									&#11834;
								</div>
								<p className='font-light leading-loose text-white'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Sit amet dictum sit amet justo donec enim.
									Erat pellentesque adipiscing commodo elit.
								</p>
							</motion.div>
						</motion.div>
						<motion.div
							ref={refSkills}
							variants={loadSkillsVariant}
							initial={!isInViewSkills && "out"}
							animate={isInViewSkills ? "in" : "out"}
							className='py-8'
						>
							<motion.h3
								variants={elementVariant}
								className='mb-8 text-4xl text-white font-header'
							>
								Skills
							</motion.h3>
							{/* SKILLS BLOCK */}
							<motion.ul
								variants={elementVariant}
								className='flex flex-wrap gap-3 md:gap-5'
							>
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
							</motion.ul>
						</motion.div>
					</div>
					<motion.div
						ref={refExperience}
						variants={loadSkillsVariant}
						initial={!isInViewExperience && "out"}
						animate={isInViewExperience ? "in" : "out"}
						className='md:basis-1/2'
					>
						<motion.h2
							variants={elementVariant}
							className='mb-8 text-4xl text-white font-header'
						>
							Experience
						</motion.h2>
						<motion.div
							variants={elementVariant}
							className='space-y-10'
						>
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
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Skills
