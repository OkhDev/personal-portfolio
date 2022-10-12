import { motion } from "framer-motion"

import { ProjectsTitle, Project, ViewLinks } from "../constants/index"

function Projects() {
	return (
		<section className='relative flex flex-col items-center py-24 bg-white md:py-48 lg:py-64'>
			<div className='relative flex w-full pb-10 pl-6 h-max md:pl-12 max-w-7xl'>
				<h1 className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem]'>
					{ProjectsTitle}
				</h1>
			</div>
			<div className='relative flex flex-col w-full h-full gap-24 md:px-12 max-w-7xl md:drop-shadow-none'>
				{Project.map((project, i) => (
					<div
						key={i}
						className={`flex flex-col w-full bg-white ${
							Math.abs(i % 2) == 1
								? "md:flex-row"
								: "md:flex-row-reverse"
						}`}
					>
						<div className='relative w-full min-h-[30vh] basis-1/2 overflow-clip bg-flatpurple items-center justify-center flex'>
							<span className='text-xl text-white uppercase'>
								Image Here
							</span>
							{/* <img
								src={project.imageSrc}
								alt={project.imageAlt}
								className='object-cover w-full h-full'
							/> */}
						</div>
						<div className='flex flex-col gap-8 p-6 md:p-12 basis-1/2'>
							<h3 className='text-4xl font-header'>
								{project.projectName}
							</h3>
							<p className='leading-loose'>
								{project.projectDescription}
							</p>
							<div className='flex flex-wrap justify-center w-full gap-6 md:justify-start'>
								{project.technologiesUsed.map((tech, i) => (
									<span
										key={i}
										className='inline-flex items-center px-4 py-3 rounded-md bg-offwhite w-max drop-shadow-sm'
									>
										{tech}
									</span>
								))}
							</div>
							<div className='flex flex-wrap items-center justify-center w-full gap-6 mt-6 md:justify-start'>
								<a
									href={project.projectWebsite}
									className='px-4 py-3 text-white rounded-md bg-flatpurple w-max drop-shadow-sm'
								>
									Live Preview
								</a>
								<a
									href={project.projectGithub}
									className='px-4 py-3 text-white rounded-md bg-flatpurple w-max drop-shadow-sm'
								>
									View Code
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects
