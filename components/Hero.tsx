import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { Links } from "../constants"

const Hero = () => {
	return (
		<div className='relative flex-grow flex items-center px-8 md:px-12'>
			<div className='flex flex-col -mt-12 flex-grow'>
				<div className='text-flatpurple font-body font-medium text-2xl  -rotate-12 w-max'>
					Hello!
				</div>
				<div className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] mt-2 mb-4'>
					I am Ariel Okhtenberg
				</div>
				<div className='text-lg md:text-xl text-flatgray'>
					<span className='text-flatgray'>Web Developer</span> &{" "}
					<span className='text-flatgray'>Graphic Designer</span>
				</div>
				<div className='flex space-x-2 my-10'>
					<div className='flex-initial w-12 mt-1'>&#11834;</div>
					<div className='text-flatgray font-light leading-loose'>
						I love to build. I am a life long learner and have a
						desire for some good pizza.
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='my-10'>
						<a
							href='/'
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
							<a
								key={item.name}
								target={item.target}
								href={item.href}
								className='bg-offwhite px-6 py-5 rounded-3xl items-center'
							>
								<span className='sr-only'>{item.name}</span>
								<item.icon className='w-6' aria-hidden='true' />
							</a>
						))}
					</div>
				</div>
			</div>
			<div className='absolute bottom-36 -right-4 w-max rotate-90 text-flatgray font-light inline-flex md:bottom-48 md:right-12 select-none text-sm'>
				<hr /> Scroll Down <ArrowRightIcon className='ml-4 w-4' />
			</div>
		</div>
	)
}

export default Hero
