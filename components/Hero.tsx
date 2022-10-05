import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { Links } from "../constants"

const Hero = () => {
	return (
		<div className='relative flex-grow flex items-center px-8 md:px-12'>
			<div className='flex flex-col -mt-8 flex-grow'>
				<div className='text-flatpurple font-body font-medium text-2xl  -rotate-12 w-max'>
					Hello!
				</div>
				<div className='relative mt-2 mb-4'>
					<span className='font-header text-[3.25rem] md:text-6xl lg:text-7xl leading-[3.5rem] '>
						I am Ariel Okhtenberg
						<span className='text-flatpurple font-header text-[3.25rem] md:text-6xl lg:text-7xl'>
							.
						</span>
					</span>
				</div>
				<div className='text-lg md:text-xl text-flatgray inline-flex'>
					<div className='relative w-max'>
						<span className='text-flatgray'>Web Developer</span>
						<span className='absolute bg-flatpurple/30 h-1 w-full left-0 bottom-0 -z-[1]'></span>
					</div>
					&nbsp;&amp;&nbsp;
					<div className='relative w-max'>
						<span className='text-flatgray'>Graphic Designer</span>
						<span className='absolute bg-flatpurple/30 h-1 w-full left-0 bottom-0 -z-[1]'></span>
					</div>
				</div>
				<div className='flex space-x-2 my-10'>
					<div className='flex-initial w-12 mt-1'>&#11834;</div>
					<div className='text-flatgray font-light leading-loose'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
				</div>
				<div className='flex flex-col select-none'>
					<div className='mb-10 mt-4'>
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
			<div className='absolute bottom-40 -right-4 w-max rotate-90 text-flatgray font-light inline-flex md:bottom-40 md:right-12 select-none text-sm'>
				<hr /> Scroll Down <ArrowRightIcon className='ml-4 w-4' />
			</div>
		</div>
	)
}

export default Hero
