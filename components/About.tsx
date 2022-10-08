import { motion } from "framer-motion"
import Image from "next/image"

import { Skills } from "../constants"

function About() {
	return (
		<div className='relative flex h-screen bg-gradient-to-b from-flatpurple to-lightpurple'>
			<div className='relative flex flex-col flex-1 h-full px-6 py-12 m-auto md:py-24 md:px-12 max-w-7xl'>
				<div className='basis-1/6 font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] text-white'>
					About Me
				</div>
				<div className='basis-5/6'>
					<ul className='flex flex-wrap gap-3 md:gap-4'>
						{Skills.map((item) => (
							<li className='inline-flex items-center px-4 py-3 rounded-xl bg-lightpurple w-max'>
								<span className='mt-1 text-base text-white'>
									{item.skill}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default About
