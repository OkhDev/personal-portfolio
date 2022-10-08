import { motion } from "framer-motion"
import Image from "next/image"

import { Skills } from "../constants"

function About() {
	return (
		<section className='relative flex flex-grow bg-gradient-to-b from-flatpurple to-lightpurple'>
			<div className='relative flex flex-col flex-1 h-full px-6 py-8 mx-auto md:py-24 md:px-12 max-w-7xl'>
				{/* ABOUT ME TITLE */}
				<h1 className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white mb-4'>
					About Me
				</h1>
				<div className='flex flex-col items-center md:flex-row'>
					{/* SELF IMAGE */}
					<div className='relative mb-8 md:mb-0 basis-1/3'>
						<img
							src='/images/self.png'
							className='w-64 md:w-full'
						/>
						{/* <span className='absolute w-full h-6 bg-white'></span> */}
					</div>
					{/* LIST OF SKILLS */}
					<div className='basis-2/3'>
						<ul className='flex flex-wrap gap-3 py-6 md:gap-5'>
							{Skills.map((item) => (
								<li className='inline-flex items-center px-4 py-3 rounded-xl bg-flatpurple w-max drop-shadow-sm'>
									<span className='mt-1 font-medium text-offwhite'>
										{item.skill}
									</span>
								</li>
							))}
						</ul>
						<p className='text-lg font-light leading-loose text-white'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Sit amet dictum sit amet justo
							donec enim. Erat pellentesque adipiscing commodo
							elit. Molestie ac feugiat sed lectus vestibulum
							mattis ullamcorper velit.
						</p>
					</div>
					{/* PERSONAL BIO */}
				</div>
				<div className='py-8'></div>
			</div>
		</section>
	)
}

export default About
